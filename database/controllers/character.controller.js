const Character = require("../../models/Character");


exports.getCharacters = (req, res)=>{
    Character.findAll({
        attributes: ['name', 'image']
    })
    res.send('received')
}