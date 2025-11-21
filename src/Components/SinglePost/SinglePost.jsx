import { Link, useNavigate } from "react-router-dom"

export default function SinglePost({post}) {
    const {userID,id,title,body} = post
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
    </div>
  )
}
