const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

main().then(()=>{
                 console.log("Database connected Successfully !");
      }).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/aryaconnect');
}

// for socket.io
const http = require('http');
// const server = http.createServer(app);
// const {Server} = require("socket.io");
// const io =new Server(server);

// app.get("/chats",(req,res)=>{
//     res.sendFile(__dirname + '/index.html')
// })

// io.on("connection",(Socket)=>{
//     console.log("a user connected");
// });















app.get("/",(req,res)=>{
    res.render("layouts/boilerplate");
});





app.listen(3000,()=>{
    console.log("Server is Started at port : ",3000);
})