import React from 'react'
import { Button, TextField } from '@mui/material'

const SignUp = () => {
  return (
    <div>
         
<TextField id="outlined-basic" label="email id" variant="outlined" /><br/>
<TextField id="outlined-basic" label="password" variant="outlined" /><br/>
<Button variant="contained">SignUp</Button>
    
    </div>
  )
}

export default SignUp