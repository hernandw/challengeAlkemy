const app = require("./app");
require('./models/associations')

const userRouter = require("./routes/user");
const genreRouter = require("./routes/genre");


app.use(userRouter);
app.use(genreRouter)