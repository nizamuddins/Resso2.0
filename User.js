const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require('mongoose-findorcreate');

const dataSchema = mongoose.Schema({username: String,mail:String, password:String,googleId:String,musicName: String,artists:String, image:String,source:String,filmName:String});

dataSchema.plugin(passportLocalMongoose);
dataSchema.plugin(findOrCreate);

let User = mongoose.model("ressodata",dataSchema);

passport.use(User.createStrategy());

passport.serializeUser((user,done)=>{
    done(null,user.id)
});
passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        done(err,user);
    })
});

module.exports = {User}
