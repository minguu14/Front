import Link from 'next/link';
import React from 'react'
import CreatePost from './CreatePost';

// posts 데이터 가져오기.
const getPost = async () => {
    const res = await fetch("http://127.0.0.1:8090/api/collections/posts/records", { cache: "no-store"});
    const data = await res.json();
    return data?.items as any[];
}

const PostsPage = async () => {
    const posts = await getPost();
  return (
    <div>
        <h1>Posts</h1>
        {/* 가져온 데이터 나열하기. */}
        {posts?.map((post) => {
            return <PostItem key={post.id} post={post}/>
        })}
        {/* 포스트 생성 */}
        <CreatePost/>
    </div>
  )
}

export default PostsPage

// 포스트 UI
export const PostItem = ({post}:any) => {
    const { id, title, created } = post || {};
    return (
        <Link href={`/posts/${id}`}>
            <div>
                <h3>
                    {title}
                </h3>
                <p>{created}</p>
            </div>
        </Link>
    )
}