const express = require("express");
const app = express(); 

app.get("/",function(req, res){
    res.send("<h1>Just Testing Deploy Nothing Special</h1>");
});

app.listen(3000,function(){
    console.log("listen 3000");
});