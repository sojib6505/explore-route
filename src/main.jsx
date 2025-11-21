import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Post from './Components/Post/Post.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import PostDetails from './Components/PostDetails/PostDetails.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'
const router = createBrowserRouter([
    {
      path:'/',
      Component: App,
      children: [
        {
          path:'/',
          Component: Home
        },
        {
          path:'post',
          loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
          Component: Post
        },
        {
          path:'/about',
          Component: About
        },
        {
          path:'/contact',
          Component: Contact
        },
        {
          path:'post/:postId',
          loader:({params}) =>
            fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
          Component: PostDetails
        },
        {
          path:'*',
          Component: Notfound
        }
      ]
    },
    
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
