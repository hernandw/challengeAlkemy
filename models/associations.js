const User = require('./User');
const Character = require('./Character');
const Movie = require('./Movie');
const Genre = require('./Genre');


Genre.hasMany(Movie);
Movie.belongsTo(Genre);

/* Movie.belongsToMany(Character, { through: 'CharactersMovies' });
Character.belongsToMany(Movie, { through: 'CharactersMovies' }); */