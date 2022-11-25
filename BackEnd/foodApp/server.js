const express = require('express')

const app = express();
app.use(express.json());
const userModel = require('./userModel')

app.post("/signup",async function(req,res){
    try{
    let data = req.body;
    console.log(data);
    let newUser = await userModel.create(data);
    res.json({
        message: "data received",
        data:data
    })}
    catch(err){
        res.send(err.message)
    }
})

app.listen(3000,function(){
    console.log("server started at 3000");
})