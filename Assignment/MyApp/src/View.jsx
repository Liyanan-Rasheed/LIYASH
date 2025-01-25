import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const View = () => {
    const [data,setdata]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        console.log(res.data)
        setdata(res.data)
    })
  return (
    <div>
      <h1>TABLE</h1>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>address</TableCell>
                    <TableCell>city</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((val)=>{
                        return(
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>{val.name}</TableCell>
                                <TableCell>{val.address}</TableCell>
                                <TableCell>{val.city}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  )
}

export default View