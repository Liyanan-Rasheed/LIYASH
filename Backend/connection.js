const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://liyananp6238:LIYAH@cluster0.pbjvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected")

})