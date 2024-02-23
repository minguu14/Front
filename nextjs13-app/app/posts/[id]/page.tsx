

// 각각의 포스트 디테일 부분 가져오기.
const getPosts = async (postId: string) => {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/posts/records/${postId}`,
    {next: { revalidate: 10 }});
    if(!res.ok) {
      // 가장 가까이 있는 error.js
      throw new Error("Failed to fetch data");
  }

    const data = await res.json();
    return data;
}
// params => PostDetailPage가 라우팅 될 때, ReactRouter가 params라는 객체를 생성하여
// 해당 경로에 있는 동적 값을 추출하여 제공함.

const PostDetailPage = async ({params}: any) => {
    const post = await getPosts(params.id)
  return (
    // 디테일 나열
    <div>
        <h1>posts/{post.id}</h1>
        <div>
            <h3>{post.title}</h3>
            <p>{post.created}</p>
        </div>
    </div>
  )
}

export default PostDetailPage