import React from 'react'

import { AppBar, Toolbar ,Button} from '@mui/material'
import App from '../App'
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (

    <div>
    <AppBar>
      <Toolbar>
        <h1>My app</h1>&nbsp; &nbsp;
        <Link to='/log'>
        <Button variant="contained">Login</Button>&nbsp; &nbsp;
        </Link>
      <Link to='/sign'>
      <Button variant="contained">Signup</Button> &nbsp; &nbsp;
      </Link>
      <Link to='/state'>
     <Button variant="contained">State</Button>&nbsp; &nbsp;
      </Link>
      <Link to='/Counter'>
     <Button variant="contained">Count</Button>&nbsp; &nbsp;
      </Link>
      
      <Link to='/Name'>
     <Button variant="contained">RAV</Button>&nbsp; &nbsp;
      </Link>
      <Link to='/Api'>
     <Button variant="contained">API</Button>&nbsp; &nbsp;
      </Link>
      </Toolbar>
    </AppBar>

        
    </div>
  )
}

export default Navbar