var express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var bodyParser = require("body-parser");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var User = require("./models/usermodel");
var app = express();


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
//=====================
// ROUTES
//=====================
// Showing home page

app.get("/", function (req, res) {
res.render('home');
});

// Showing secret page
app.get("/profile", isLoggedIn, function (req, res) {
res.render("sidebar");
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
var email = req.body.email
var password = req.body.password

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

var port = process.env.PORT || 3000;
app.listen(port, function () {
console.log("Server Has Started!");
});