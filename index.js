const app = require("./app");
require("./models/associations");

const userRouter = require("./routes/user");
const genreRouter = require("./routes/genre");
const movieRouter = require("./routes/movie");
const characterRouter = require("./routes/character");

app.use(userRouter);
app.use(genreRouter);
app.use(movieRouter);
app.use(characterRouter);
