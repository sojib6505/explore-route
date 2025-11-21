import { useEffect, useState } from "react"

export default function Postinfo({postPromise}) {
    const [post, setPost] = useState(null)
    useEffect(()=>{
        postPromise.then(data => setPost(data));
    },[])
    if(!post){
            return <p>loading....</p>
        } 
  return (
    <div>
        <h3>{post.title}</h3>
    </div>
  )
}
