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
const cookieParser = require('cookie-parser');
const transactions = require('./models/transactions');
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

app.get("/Profile", (req, res) => {
    res.render("sidebar");

})

// const store = new MongoDBSession(
//     {
//        uri : dbUrl,
//        collection:'Session_cookies',
//     }
// )

// app.use(session({
//     secret: 'key that will sign cookie',
//     resave: false,
//     saveUninitialized: false,
//     store: store,
// }))


app.get("/", (req, res) => {
    res.render("home");

})


app.get("/login", (req, res) => {

    // req.session.isAuth = true;
    // console.log(req.session);
    // console.log(req.session.id);
    res.render("login");
})

app.get("/help", (req, res) => {
    res.render("help");
})

app.get("/register", (req, res) => {
    res.render("register");
})

app.get("/transactions", (req, res) => {
    res.render("Transactions");
})

app.get("/aboutus", (req, res) => {
    res.render("aboutus");
})

app.post('/register', async(req, res) => {

    const data = new details({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        mobile: req.body.mobile
    })
    const user = await details.findOne({ username: req.body.username });
    if (!user) {
        const token = await data.generateAuthtoken();
        console.log('Register-token part ' + token);
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
        res.render("sidebar", { title: uname })
            // res.redirect("/Profile");
            // app.get("/Profile", (req, res) => {
            //     res.render("sidebar");
            // })

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
    trans.save().catch((err) => {
        console.log(err);
    })
    res.redirect("/transactions")

    // const n = Object.keys(req.body).length / 6
    // console.log(n);
    // const addtrans = [];
    // for (let i = 0; i < n; i++) {
    // let dat = "date" + i;
    // let ticke = "ticker" + i;
    // let act = "select" + i;
    // let quant = "quantity" + i;
    // let pric = "price" + i;
    // let tot = "total" + i;

    // console.log(req.body.dat);

    // addtrans = new transactions(
    //     {
    //         trans_Date: req.body.dat,
    //         ticker: req.body.ticke,
    //         action: req.body.act,
    //         quantity: req.body.quant,
    //         price: req.body.pric,
    //         total: req.body.tot,
    //     }
    // )
    // addtrans.save().catch((err) => {
    //     console.log(err)
    // }

    // )


    // }

    // res.status(200).send({message:"he00llo"});
})

app.listen(3010, 'localhost', () => {
    console.log("Server is running")
})