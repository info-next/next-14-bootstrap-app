import Postcard from "@/components/postCard/postCard"


export const metadata = {
  title: 'Blogs',
  description: 'Blogs page of Info-next',
}
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next: {revalidate: 36000}})
  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  return res.json();
}
 const blogPage = async () => {

const posts = await getData();
  return (
    <div className="container">
        <div className="row">

        {posts.map((post) => (
            <div className="col-md-4 p-3" key={post.id}>
            <Postcard post={post}/>
          </div>
        ))}
        </div>
    </div>
  )
}

export default blogPage