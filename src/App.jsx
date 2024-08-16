import './App.css'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  console.log(location.pathname);
  
  return (
    <div className=' mx-auto '>
      <Sidebar></Sidebar>
      {location.pathname === '/login' || location.pathname === '/register' ? '' :  <Footer></Footer>}
    </div>
  )
}

export default App
