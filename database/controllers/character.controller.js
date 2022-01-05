const User = require("../../models/Character");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authConfig = require("../config/auth");

exports.getPost = (req, res)=>{
    console.log(req.body)
    res.send('received')
}