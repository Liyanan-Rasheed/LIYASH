import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import View3 from './View3'
import Add2 from './Add2'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <br></br><br></br><br></br><br></br>
     
      
 
      <Navbar></Navbar>

      
     
        
        
      <Routes>
       
        <Route path="/add" element={<Add2/>}/>
        <Route path="/view3" element={<View3/>}/>
      
       
       
      </Routes>


    </>
  )

}

export default App
