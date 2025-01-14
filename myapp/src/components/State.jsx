import React,{useState}from 'react'


const state = () => {
  var[name,setname]=useState("ram")
  return (
    <div>
     
   <h1> State Basics</h1>
   <h2>Welcome {name}</h2>
    </div>
  )
}

export default state