import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'
import Navbar from './components/Navbar'

const App = () => {


  return (
    <div className='bg-[#1C2C4C] h-[100vh]'>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/chat' element={<Chat/>} />

      </Routes>
    </Router>
   </div>
  )
}

export default App
