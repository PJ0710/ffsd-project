const { response } = require('express');
const express = require('express');
const { render } = require('express/lib/response')
const app = express();
const sqlite3 = require('sqlite3')
const mong = require('mongoose');
const path = require('path');
const Det = require('./models/database');
const bodyparser = require('body-parser');
const details = require('./models/database');

app.use(bodyparser.urlencoded({ extended: true }));
// app.use()

const dbUrl = "mongodb+srv://SANJU:sanju_123456@cluster0.f8yjf.mongodb.net/ffsd_project?retryWrites=true&w=majority"

mong.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
    
})

app.get("/Profile", (req, res) => {
    res.render("sidebar");
    
})

app.get("/login", (req, res) => {
    res.render("login");
})

app.get("/help", (req, res) => {
    res.render("help");
})

app.get("/register", (req, res) => {
    res.render("register");
})

app.get("/Transactions", (req, res) => {
    res.render("Transactions");
})

app.get("/aboutus", (req, res) => {
    res.render("aboutus");
})

app.post('/register', (req, res) => {

    const data=new details(
        {
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            mobile:req.body.mobile
        }
    )

    data.save().then(res.redirect('/login')).catch((err)=>{
        console.log(err);
    })

})

app.post('/login',async(req,res)=>
{

const uname=req.body.username;
const user=await details.findOne({username:uname});
console.log(user.password);
if(user.password===req.body.password)
{
    res.render("sidebar",{title:uname})
    // res.redirect("/Profile");
    // app.get("/Profile", (req, res) => {
    //     res.render("sidebar");
    // })
    
}
else
{
    res.render("login")  
}

})


app.listen(3010, 'localhost', () => {
    console.log("Server is running")
})




