const Movie = require("../../models/Movie");


exports.getPost = (req, res)=>{
    console.log(req.body)
    res.send('received')
}