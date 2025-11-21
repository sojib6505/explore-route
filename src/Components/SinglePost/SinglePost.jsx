import { Suspense, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Postinfo from "../Postinfo/Postinfo"

export default function SinglePost({post}) {
    const [showInfo , setShowInfo] = useState(false)
    const {userID,id,title,body} = post
    const postPromise = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json())
    const navigate = useNavigate()
    
     

    const handleClick = () => {
         navigate(`${id}`)
    }
  return (
       <div className="grid gap-2 border-2 border-blue-400 p-5 rounded-2xl">
           <p >UserID: {userID}</p>
           <p>ID: {id}</p>
           <h3>{title}</h3>
           <button className="p-2 bg-amber-100" onClick={handleClick}>Post Details</button>
           <button onClick={()=>setShowInfo(!showInfo)} className="p-2 bg-amber-200">{showInfo ? 'Hide' : 'Show'} Info</button>
           {showInfo && <Suspense fallback={<span>Loading....</span>}>
             <Postinfo postPromise={postPromise}></Postinfo>
            </Suspense>}
    </div>
  )
}
