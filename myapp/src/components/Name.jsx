import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'

const Name = () => {
    var[val,setval]= useState()

    const input1 = ()=> {
        setval("REACT")
  }
  
  const input2 =() =>{
       setval("ANGULAR")
  }
  const input3 =() =>{
    setval("VUE")
    
  }

  useEffect(()=>{
    input2()
  },[]
  )
    return (
    <div>
      <h1> WELCOME {val}</h1>
    <Button variant="outlined" onClick={input1}>REACT</Button>
    <Button variant="outlined"onClick={input2}>ANGULAR</Button>
    <Button variant="outlined"onClick={input3}>VUE</Button>
    
    </div>
    )
}

export default Name