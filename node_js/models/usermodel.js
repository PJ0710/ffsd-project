const mongoose = require("mongoose");
const passportLocalMongoose=require("passport-local-mongoose");
const Schema=mongoose.Schema;
// create an schema
var userSchema = new Schema({
            name: String,
            password: String,
            email:String
        });

userSchema.plugin(passportLocalMongoose);
var Users=mongoose.model('users',userSchema);
 
module.exports = Users;