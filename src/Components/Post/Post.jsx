import { useLoaderData } from "react-router-dom"
import SinglePost from "../SinglePost/SinglePost"


export default function Post() {
    const posts = useLoaderData()
    
  return (
    <div className="grid grid-cols-4 p-5  gap-5">
        {posts.map(post => <SinglePost post={post}></SinglePost>)}
    </div>
  )
}
