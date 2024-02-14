
export const generateMetadata =async ({params}) => {
  const post = await getData(params.slug);
   return {
    title: post.title,
    description: post.body
  }
}

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  return res.json();
}

const singlePost = async ({params}) => {
 const slug = params.slug
 const post = await getData(slug);
return (
<div className="container my-5">
  <div  style={{ maxWidth: '700px', top: '-80px' }} className="mx-auto text-secondary">
    <div>
        <small>
          <a href="#" className="text-primary">Election</a>, <a href="#" className="text-primary">Politics</a>
      </small>
    </div>
    <h1 className="font-weight-bold text-dark">{post.title}
</h1>
    <p className="my-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.</p>
    </div>
  <img className="w-100 my-3" src="https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1" />
  
  <div style={{ maxWidth: '700px', top: '-80px' }} className="mx-auto text-secondary">
    <p className="my-2">{post.body}</p>
    <br/>    
  </div>
</div>
  )
}

export default singlePost