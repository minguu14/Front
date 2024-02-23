"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        // 생성하는 부분.
        await fetch("http://127.0.0.1:8090/api/collections/posts/records", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({ title })
        });

        // post 생성시 새로고침.
        router.refresh();

        setTitle("");
    }
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder="title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Create Post</button>
    </form>
  )
}

export default CreatePost