const router = require("express").Router(); 
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const Authcontroller = require("../controllers/auth");
const User =require('../models/user')


//REGISTER
router.post("/register",Authcontroller.insert);

//LOGIN
router.post('/login',Authcontroller.login);

module.exports = router;
