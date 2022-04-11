const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const User = require("./models/usermodel");
const { render } = require('express/lib/response');
const { response } = require('express');

const app = express();


const dbUrl = "mongodb+srv://SANJU:sanju_123456@cluster0.f8yjf.mongodb.net/Login?retryWrites=true&w=majority"
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
secret: "node js mongodb",
resave: false,
saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/", function (req, res) {
res.render('home');
});

// Showing secret page
app.get("/profile", isLoggedIn(req), function (req, res) {
res.render("sidebar",{title:req.username});
});


// Showing register form
app.get("/register", function (req, res) {
res.render('register', {
title: 'Registration Page',
name: '',
email: '',
password: ''    
})
});
// Handling user signup
app.post("/register", function (req, res) {
let username=req.body.username
const email = req.body.email
const password = req.body.password

User.register(new User({username:username}),
password, function (err, user) {

if (err) {
console.log(err);
return res.render("register");
}

passport.authenticate("local")(
req, res, function () {
res.render("home");
});
});
});
//Showing login form
app.get("/login", function (req, res) {
res.render('login', {
title: 'Login',
username: '',
password: ''     
})
});
//Handling user login
app.post("/login", passport.authenticate("local", {
successRedirect: "/profile",
failureRedirect: "/login"
}), function (req, res) {
});
//Handling user logout
app.get("/logout", function (req, res) {
req.logout();
res.redirect("/");
});

function isLoggedIn(req, res, next) {
if (req.isAuthenticated()) return next();
res.redirect("/login");
}

const port = process.env.PORT || 3000;
app.listen(port, function () {
console.log("Server Has Started!");
});