import { useLoaderData, useNavigate } from "react-router-dom"


export default function PostDetails() {
    const post = useLoaderData()
    const navigate = useNavigate()
  return (
   <div className="flex justify-center mt-20">
      <div className="w-150 text-xl font-bold ">
        {post.body}
        <div>
           <button onClick={() => navigate(-1)} className="p-2 bg-gray-400 mt-5 rounded-xl">Go Back</button>
        </div>
    </div>
   
   </div>
  )
}
