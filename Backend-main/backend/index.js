const express = require('express')
require("./connection")
var EmpMODEL=require("./MODELS/employee")
var cors = require('cors')
const app =  express()
app.use(express.json())
app.use(cors())

app.get('/',(req, res)=>{
    res.send('Hello world')
})
app.get('/hi',(req, res)=>{
    res.send('heyy')
})
app.get('/trail',(req,res)=>
{
    res.send('trail message')
})
app.post("/add", async (req, res)=>
{
 try{
await EmpMODEL(req.body).save()
res.send({message: "Data added"})
 }catch (error){
    console.log(error)
 }
})
 app.get("/view", async (req, res)=>
 {
  try{
 var data=await EmpMODEL.find()
 res.send(data)
  }catch (error){
     console.log(error)
  }

app.delete("/delete/:id,",async (req,res)=>{
    try{

    
    await EmpMODEL.findByIdAndUpdate(req.params.id)

    res.send({ message:"data deleted"})
    }
    catch(error)
    {
        console.log(error)
    }
})

})

app.listen(3004, ()=>{
    console.log("index is running in the port 3004")
})