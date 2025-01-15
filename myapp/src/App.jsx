import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import State from './components/State'
import Counter from './components/Counter'
import Name from './components/Name'
import Api from './components/Api'

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
        <Route path="/Counter"element={<Counter/>}/>
        <Route path="/Name"element={<Name/>}/>
        <Route path="/Api"element={<Api/>}/>
      </Routes>
      
    </div>
  )
}

export default App
