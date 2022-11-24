//require express
const express = require("express")


// you have to write it -> app signifies -> your server
const app = express();
app.use(express.json());
//app.use(express.urlencoded());

let user;

app.get("/",function(req,res){
    res.send("Home page");
})
//get karna hai data from sayHello
app.get("/sayHello",function(req,res){
    res.json({
        message: "Get value from server",
        user:user
    })
})
//post
app.post("/sayHello",function(req,res){
    user = req.body;
    res.json({
        message:"Data received Sucessfully",
        user:user
    })
})
//patch
app.patch("/sayHello",function(req,res){
    dataToUpdate = req.body;
    for(key in dataToUpdate){//loop from key =1 to nth key
        user[key] = dataToUpdate[key];
    }
    res.json({
        message:"Data update sucessfully",
        user : user
    })
})
//delete
app.delete("/sayHello",function(req,res){
    user = {};
    res.json({
        message:"Deletion",
        user: user
    })
})
//get karna hai data from sayBye
app.get("/sayBye", function(req,res){
    res.send("bye");
})

app.get("/getMultiply/:num1/:num2",function(req,res){
    console.log(req.params);
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let mul = num1*num2;
    res.end("Multiply of params are " + mul)
})
//3000- address of a server-> on a giver machine
app.listen(3000, function(){//is port se server ko computer mea entry milegi
    console.log("Server sarted at port 3000")
})