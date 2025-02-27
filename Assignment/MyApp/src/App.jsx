import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import View from './View'
import Add from './Add'
import Home from './components/home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    
    <br></br><br></br><br></br><br></br>
    <Navbar>
    </Navbar>
      <Routes>
       
        <Route path="/add" element={<Add/>}/>
        <Route path="/view" element={<View/>}/>
      
      </Routes>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      

    </>
  )

}

export default App