const { response } = require('express');
const express = require('express');
const { render } = require('express/lib/response')
const app = express();
const mong = require('mongoose');
const path = require('path');
const Det = require('./models/database');
const bodyparser = require('body-parser');
const details = require('./models/database');
const cookieParser = require('cookie-parser');
const transactions = require('./models/transactions');
const portfolios = require('./models/portfolio');
const { nextTick } = require('process');

// const session = require("express-session");
// const MongoDBSession = require('connect-mongodb-session')(session);
app.use(express.json());
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


app.get("/login", (req, res) => {
    res.render("login");
})

app.get("/help", (req, res) => {
    res.render("help");
})

app.get("/register", (req, res) => {
    res.render("register");
})

app.get("/transactions", (req, res) => {

    // portfolios.find({},(err,data)=>{
    //     if(err)
    //     {
    //         console.log(err)
    //     }
    //     else{
    //         console.log(data);
    //     }
    // })
    res.render("Transactions");
})

app.get("/aboutus", (req, res) => {
    res.render("aboutus");
})

app.get("/profile/:token", async (req, res, next) => {
    const uname = req.params.token;
    
    const user = await details.findOne({ username: uname });
    
    if(!user)
    {
        res.redirect("/login")
    }
    else{
        transactions.find({},(err,row)=>
            {
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    res.render("sidebar",{title:uname,data:row})
                }
            })
       
    }

  });

app.post("/profile/:token",async (req,res,next)=>
  {
    const uname = req.params.token;
    // const pfolio = new portfolios(
    //     {
    //         portfolio: req.body.date,
    //     })
    const user = await details.findOne({ username: uname });
    if(!user)
    {
      res.redirect("/transactions")
    }
    else
    {
        console.log(req.body);
        // const portfol = new portfolios(
        //     {
        //         portfolio:req.body.para,
        //     }
        // )
        // trans.save().then((result)=>{res.json({redirect:"/profile/Sanju064"})}).catch((err) => {
        //     console.log(err);
        // })
        // portfol.save().catch((err)=>
        // {
        //     console.log(err)
        // })
        // res.redirect("/transactions")
       
    }
  })
app.post('/register', async (req, res) => {

    const data = new details({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        mobile: req.body.mobile
    })
    const user = await details.findOne({ username: req.body.username });
    if (!user) {
        const token = await data.generateAuthtoken();
        // console.log('Register-token part ' + token);
        // const registered=await;
        data.save().then(res.redirect('/login')).catch((err) => {
            console.log(err);
        })
    } else {
        console.log("User Registered Already or username already exists");
        res.redirect("/login");
    }

})
app.post('/deleteuser', async(req, res) => {
    console.log(req.body.username);

    users.deleteOne({ name: req.body.username }, (err) => {
        if (err) {
            throw err;
        }
    });
    next();
})

app.get("/admin", (req, res) => {
    try {
        let users = details.find({});
        users.exec((err, data) => {
            if (err) throw err;
            res.render("admin", { rec: data });
        });
    } catch (error) {
        console.log(error);
    }
});

app.post('/login', async(req, res) => {

    const uname = req.body.username;
    const user = await details.findOne({ username: uname });
    // console.log(user.password);
    const token = await user.generateAuthtoken();

    res.cookie("jwt", token);
    // console.log('Login- token part ' + token);

    if (user.password === req.body.password) {

        // req.session.isAuth=true;
        res.redirect("/profile/"+uname);
       

    } else {
        res.redirect("/login")
    }

})
app.post("/transactions", (req, res) => {

    console.log(req.body)
    const trans = new transactions({
        trans_Date: req.body.date,
        ticker: req.body.ticker,
        action: req.body.select,
        quantity: req.body.quantity,
        price: req.body.price,
        total: req.body.total,
    })
    trans.save().then((result)=>{res.json({redirect:"/profile/Sanju064"})}).catch((err) => {
        console.log(err);
    })
   

})

app.listen(3010, 'localhost', () => {
    console.log("Server is running")
})
