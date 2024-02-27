"use client"
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const deleteTopic = async (id: string | string[]) => {
  const option = {method: "DELETE"};
  await fetch(`http://localhost:9999/topics/${id}`, option);
}

export function Control() {
  const params = useParams();
  const id = params.id;
  return (
    <ul>
      <li><Link href="/create">Create</Link></li>
      {id ? 
      <>
      <li><Link href={`/update/${id}`}>Update</Link></li>
      <li><input type="button" value="delete" onClick={() => deleteTopic(id)}/></li>
      </>
      : null}
    </ul>
  );
}
