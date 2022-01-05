const Genre = require("../../models/Genre");



exports.createGenre = (req, res) => {
  const { name, image } = req.body;
  Genre.create({
    name,
    image,
  }).then((genre) => {
    res
      .json({
        genre: genre,
      })
      .catch((error) => {
        res.status(500).json({
          msg: "something wrong" + error,
        });
      });
  });
};