import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Register from './components/Register'
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
      <br></br><br></br><br></br><br></br>
    <Navbar>

    </Navbar>

      <Routes>
       
        <Route path="/" element={<Register/>}/>

      </Routes>
      </div>
      
    </>
  )
}

export default App
