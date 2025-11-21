
import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'


function App() {
  const navigation = useNavigation();
  const isNavigation =  Boolean(navigation.location)

  return (
    <>
     <Header></Header>
     {isNavigation && <span className='text-7xl font-bold flex justify-center items-center'>loading....</span>}
      <Outlet></Outlet>
    </>
  )
}

export default App
