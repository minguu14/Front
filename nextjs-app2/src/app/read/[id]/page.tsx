
const page = async ({params}: any) => {
    const res = await fetch(`http://localhost:9999/topics/${params.id}`,{cache: "no-store"});
    const topics = await res.json();
  return (
    <>
        <h2>{topics.title}</h2>
        {topics.body}
    </>
  )
}

export default page