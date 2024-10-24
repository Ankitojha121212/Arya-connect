const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


app.get("/",(req,res)=>{
    res.render("layouts/boilerplate");
});


app.listen(3000,()=>{
    console.log("Server is Started at port : ",3000);
})