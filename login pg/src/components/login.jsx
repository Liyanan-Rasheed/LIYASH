import React from 'react'
import { TextField, Button } from '@mui/material'

const Login = () => {
  return (
    <div>
    <h1>

    <TextField variant='outlined'label="E-mail" style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <TextField variant='outlined'label="Password"style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}}/><br /><br />
    <Button variant="contained"style={{backgroundColor:"white",color:"black"}}>Login</Button>

      </h1>
        </div>
  )
}

export default Login