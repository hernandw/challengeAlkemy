const Character = require("../../models/Character");


exports.getPost = (req, res)=>{
    console.log(req.body)
    res.send('received')
}