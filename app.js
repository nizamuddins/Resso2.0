//jshint esversion:6
require("dotenv").config()
const express = require('express');
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
const flash = require('connect-flash');
const config = require("./config");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("passport");
const userRoutes = require("./userRoutes");
const {use, authenticate} = require("passport");
const {profile} = require("console");
const {access} = require("fs");
const nocache = require('node-nocache');
const {post, get} = require("request");
const {googleouath2O} = require("./usercontroller");


const oneDay = 1000 * 60 * 60 * 24;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.json());
app.set("view engine", "ejs");
app.use(nocache);

//session

app.use(session({
    secret: "thisisresso2.0project096",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: oneDay
    }

}))

// flash
app.use(flash())

// passport

app.use(passport.initialize());
app.use(passport.session());

// get

app.use("/", nocache, userRoutes);
app.use("/sign", userRoutes);
app.use("/resso2.0", userRoutes);
// post

app.use("/login", userRoutes);
app.use("/signup", userRoutes);

// googleouath2O

app.use("/auth/google", userRoutes);
app.use("/auth/google/secrets", userRoutes)

// get
app.use("/YourFm", userRoutes);
app.use("/Browse", userRoutes);
app.use("/history", userRoutes);

// post
app.use("/song", userRoutes)

// get
app.use("/clear", userRoutes);
app.use("/settings", userRoutes);
app.use("/delete", userRoutes);
app.use("/forgot", nocache, userRoutes);

// post
app.use("/forgot", nocache, userRoutes);
app.use("/newPassword", nocache, userRoutes);

// get
app.use("/logout", nocache, userRoutes);

app.listen(port, () => console.log(`Example app listening on port 4000`));
