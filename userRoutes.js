const { Router } = require('express');
const express = require('express');
const { get, post } = require('request');
const router = express.Router()
const userController = require('./usercontroller');


// get**********
router.get("/",userController.gettLogin);
router.get("/signup",userController.getSignup);
router.get("/resso2.0",userController.getResso);

// post************
router.post("/login",userController.postLogin);
router.post("/signup",userController.postSignup);

// googleget*************
router.get("/auth/google",userController.googleAuth);
router.get("/auth/google/secrets",userController.googleouath2O,
(req,res)=>{    setTimeout(()=>{        res.redirect("/resso2.0");    },3000)}
);

// get*************
router.get("/YourFm",userController.yourFm);
router.get("/Browse",userController.browse);
router.get("/history",userController.history);

// post
router.post("/song",userController.Song);

// get
router.get("/clear",userController.Clear);
router.get("/settings",userController.Settings);
router.get("/delete",userController.AccountDeletion);
router.get("/forgot",userController.Forgot);

// post
router.post("/forgot",userController.postForgot);
router.post("/newPassword",userController.NewPassword);

// get
router.get("/logout",userController.Logout);








// Private Routes

module.exports =  router