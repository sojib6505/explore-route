import { NavLink } from "react-router-dom";

export default function Header() {
  return (
   <div className="flex justify-center gap-5 p-5 text-2xl font-bold ">
       <NavLink to='/'>Home</NavLink>
       <NavLink to='/post'>Post</NavLink>
       <NavLink to='/about'>About</NavLink>
       <NavLink to='/contact'>Contact</NavLink>
   </div>

  )
}
