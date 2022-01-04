const app = require('./app');
const { createUser } = require('./database/controllers/user.controller');
//Setting
const PORT = process.env.PORT || 3000;



app.use(userRoutes);

const main = (req, res) => {
  
};


main();