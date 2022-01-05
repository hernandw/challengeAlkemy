const app = require("./app");

const userRouter = require("./routes/user.js");


app.use(userRouter);
