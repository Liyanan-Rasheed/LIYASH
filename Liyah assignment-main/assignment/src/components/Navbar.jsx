import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <div>
            <AppBar>
            <Toolbar>
            
                
                <h2></h2>&nbsp;&nbsp;
               
                <Link to='/add'>
                    <Button variant="contained">ADD</Button>
                </Link>
                <Link to='/View3'>
                    <Button variant="contained">VIEW</Button>
                </Link>
               
                &nbsp;
               
            </Toolbar>
        </AppBar>
        </div >
    )
}

export default navbar