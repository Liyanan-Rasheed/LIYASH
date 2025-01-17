import React,{useState}from 'react'
import { TextField ,Button} from '@mui/material'

const State = () => {
  var[name,setname]=useState("Ram")
  var[val,setval]= useState()

   const handleinput = (e)=> {
        console.log(e.target.value)
      setname(e.target.value)
   }
   
   const subhandler=() =>{
       console.log("Hi " +name)
       setval(name) 
   }

   
  return (
     <div>
        <h1>State Basics</h1>
        <h2>Welcome{val}</h2> 

        <TextField label="Name" variant="outlined" onChange={handleinput}/><br />
        <Button variant='contained'onClick={subhandler}>Submit</Button>

    </div>
  )
}

export default State