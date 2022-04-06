const { response } = require('express');

const express = require('express');
const { render } = require('express/lib/response')
const app = express();
const sqlite3 = require('sqlite3')
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended: true}));

let path = require('path');

// app.use()

app.use(express.static(__dirname + '/public'));
const db_name = path.join(__dirname, "data", "register.db")


const db = new sqlite3.Database(db_name, err => {
    if (err) {
        return console.log(err.message)
    }
    console.log("Database Connected")
})

const table = 'CREATE TABLE IF NOT EXISTS users(username VARCHAR(100) PRIMARY KEY NOT NULL,password varchar(300) NOT NULL);'
db.run(table,err=>
    {
        if(err)
        {
            return console.log(err.message)
        }
        console.log("Table Created")
    })



app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/HTML/home.html"))
    // res.render(path.resolve("../public/HTML/home.html"), { title: "Home" });
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve("./public/HTML/login.html"))
})

app.get("/help", (req, res) => {
    res.sendFile(path.resolve("./public/HTML/help.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve("./public/HTML/register.html"))
})

app.get("/Profile",(req,res)=>
{
    res.sendFile(path.resolve("./public/HTML/sidebar.html"))
})

app.get("/Transactions",(req,res)=>
{
    res.sendFile(path.resolve("./public/HTML/Transactions.html"))
})

app.get("/aboutus",(req,res)=>
{
res.sendFile(path.resolve("./public/HTML/aboutus.html"))
})

app.post("/register",(req,res)=>
{
    // const username=req.body.username;
    // const password=req.body.password;
    console.log(req.body)
    
    db.run('INSERT INTO users(username,password) VALUES(?,?)',[req.body.username,req.body.password],err=>
        {
            if(err)
            {
                return console.log(err.message)
            }
            console.log('Data Entered')
        })
        res.redirect('/login')
        
})


app.post('/login', (req, res)=>{

    const username = req.body._username;
    const password = req.body._password;

    console.log(+req.body)

    db.get("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], (err, row)=>{
        if(err){
            console.log("Error in login"+ err)
        }
        else{
            if(row){
                res.redirect('/Profile');
            }
            else{
                console.log(req.body);
                
                console.log("Invalid username/password");
            }
        }
    });

});


app.listen(3010, 'localhost', () => {
    console.log("Server is running")
})
