//import
const express = require('express')
require('./connection')
var EmpModel=require('./models/employee')

//initialise
const app=express()

//mid
app.use(express.json())


//api creation
app.get('/',(req,res)=>{
    res.send('Hello World')
})
//trial api
app.get('/trial',(req,res)=>{
    res.send('trial message')
})
//add api
app.post('/add',async(req,res)=>{
    try{
        await EmpModel(req.body).save()
    res.send({message:"Data Added"})
    } catch (error){
        console.log(error)
    }
})
//view api
app.get('/view',async(req,res)=>{
    try{
         const employee=await EmpModel.find()
    res.send({employee})
    } catch (error){
        console.log(error)
    }
 //delete api
})
app.put('/update/:id',async(req,res)=>{
    try{
        await EmpModel.findByAndUpdate(req.params.id)
    res.send({message:"Data updated"})
    } catch (error){
        console.log(error)
    }
})
//update api
app.delete('/remove/:id',async(req,res)=>{
    try{
        await EmpModel.findByAndDelete(req.params.id)
    res.send({message:"Data Deleted"})
    } catch (error){
        console.log(error)
    }
})
//port selling
app.listen(3008,()=>{
    console.log("port is running on 3006")
})