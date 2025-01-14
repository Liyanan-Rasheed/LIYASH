import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import State from './components/State'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>  
      &nbsp;
      <h1>liyyaah!</h1>
    
      <Navbar/>
      <Routes>
        <Route path="/log" element ={<Login/>}/>
        <Route path="/sign" element ={<SignUp/>}/>
        <Route path="/state" element={<State/>}/>
      
      </Routes>
      
    </div>
  )
}

export default App
