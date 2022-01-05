const Genre = require("../../models/Genre");


exports.getPost = (req, res)=>{
    console.log(req.body)
    res.send('received')
}