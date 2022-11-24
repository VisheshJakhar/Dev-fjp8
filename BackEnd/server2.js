const express = require("express");
const app = express();
//case :1 here first one will work, the output will be Simple output 1

//app.get("/simple",function(req,res){
//    res.send("Simple output 1")
//})

//app.get("/simple",function(req,res){
//    res.send("Simple output 2")
//})

//app.get("/simple",function(req,res){
//    res.send("Simple output 3")
//})

//3000- address of a server-> on a giver machine

//case 2  here hello from use will print irrespective of the method used(get,post,patch)

//app.use(function(req,res){
//    res.send("use will always run");
//})

//app.get("/simple",function(req,res){
//    res.send("hello fron get");
//})

//app.patch("/simple",function(req,res){
//    res.send("hello fron patch");
//})

//app.delete("/simple",function(req,res){
//    res.send("hello fron delete");
//})

//Case:3
//middleware -> Its like a middle man
//user defined middleware-> next call

//app.use(function(req,res,next){
//    console.log("use will always run");
//    next();//next() ne post ko run kar diya
//})
//
//app.post("/simple",function(req,res){
//res.send("hello from post"); 
//})


app.listen(3000, function(){//is port se server ko computer mea entry milegi
    console.log("Server sarted at port 3000")
})