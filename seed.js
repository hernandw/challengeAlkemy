const sequelize = require('./database/config/db');
const Character = require('./models/Character');
const User = require('./models/User');
const Movie = require('./models/Movie');
const Genre = require('./models/Genre');
require('./models/associations');

//User
const users = [
    { username: "frontadoa", password: "123456", name: "Antonio", email: "frontadoa@gmail.es", role: 0 },
    { username: "aguirrep", password: "123456", name: "Pedro", email: "aguirrep@gmail.com", role: 1 },
    { username: "hertzl", password: "123456", name: "Lucia", email: "hertzl@hotmail.com", role: 0 },
];
