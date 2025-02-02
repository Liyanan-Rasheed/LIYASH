import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/login'
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
      <br></br><br></br><br></br><br></br>
    <Navbar>

    </Navbar>

      <Routes>
       
        <Route path="/" element={<Login/>} /> 

      </Routes>
      </div>
      
    </>
  )
}

export default App
