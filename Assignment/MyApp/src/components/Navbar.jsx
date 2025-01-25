import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
             <AppBar position='sticky'style={{backgroundColor:"black",}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}style={{color:"white",fontFamily:"-moz-initial"}}>THE BLOG</Typography>
                <Link to='/add'>
                    <Button variant="contained">LOGIN</Button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/view'>
                    <Button variant="contained">VIEW</Button>
                </Link>
                &nbsp;
               
            </Toolbar>
        </AppBar>
        </div >
    )
}

export default Navbar