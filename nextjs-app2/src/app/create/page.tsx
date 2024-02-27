"use client"
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
  return (
    <form onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // e.target의 경우 타입이 기본적으로 EventTarget으로 추론되므로 실제로 사용하는 타겟의 타입을 명시적으로 지정해야한다.
        const target = e.target as typeof e.target & {
            title: { value: string };
            body: { value: string };
          };
        const title = target.title.value;
        const body = target.body.value;
        const option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title, body}),
        }
        try {
            const res = await fetch("http://localhost:9999/topics", option)
            const topics = await res.json();
            const lastId = topics.id;
            router.push(`/read/${lastId}`);
            router.refresh();
        }catch(err){
            console.error("fail to fetchData.");
        }
        
    }}>
        <p>
            <input type="text" name="title" placeholder="title" />
        </p>
        <p>
            <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
            <input type="submit" value="create" />
        </p>
    </form>
  )
}

export default page