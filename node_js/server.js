const { response } = require('express');

const express = require('express');
const { render } = require('express/lib/response')
const app=express();

// const mysql=require('mysql');

// const db=mysql.createConnection(
//     {
//         user:'root',
//         host:'localhost',
//         password:'password',
//         database:"login",
//     }
// )

let path = require('path');

// app.use()
console.log("Hello "+__dirname)
app.use(express.static(__dirname + '/public'));


app.get("/",(req,res)=>
{
    res.sendFile(path.resolve("./public/HTML/home.html"))
    // res.render(path.resolve("../public/HTML/home.html"), { title: "Home" });
})

app.get("/login",(req,res)=>
{
    res.sendFile(path.resolve("./public/HTML/login.html"))
})

app.get("/help",(req,res)=>
{
    res.sendFile(path.resolve("./public/HTML/help.html"))
})

app.get("/register",(req,res)=>
{
    res.sendFile(path.resolve("./public/HTML/register.html"))
})

app.listen(3010,'localhost',()=>
    {
        console.log("Server is running")
    })
