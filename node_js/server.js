const { response } = require('express');

const express = require('express');
const { render } = require('express/lib/response')
const app=express();

// app.set("views","myviews")
let path = require('path');

app.get("/",(req,res)=>
{
    res.sendFile(path.resolve("../Home/home.html"))
})



app.listen(3010,'localhost',()=>
    {
        console.log("Server is running")
    })