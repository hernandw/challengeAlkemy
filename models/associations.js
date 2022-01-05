const User = require('./User');
const Character = require('./Character');
const Movie = require('./Movie');
const Genre = require('./Genre');

Movie.belongsTo(Genre, {
    foreignKey: 'id',
    target_key: 'cod_genre'
  });

Movie.belongsToMany(Character, { through: 'CharactersMovies' });
Character.belongsToMany(Movie, { through: 'CharactersMovies' });