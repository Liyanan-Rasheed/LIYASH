import React from 'react'
import { TextField,Button } from '@mui/material'

const Register = () => {
  return (
     <div>

        <TextField variant='outlined'label="Enter Name"style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField variant='outlined'label="Enter Email"style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}}/><br /><br />
        <TextField variant='outlined'label="Enter Password"style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField variant='outlined'label="Enter phone no."style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}}/><br /><br /><br /><br /><br />
        <Button variant='contained'style={{backgroundColor:"white",color:"black"}}>REGISTER NOW</Button><br /><br />  

     </div>
  )
}

export default Register

