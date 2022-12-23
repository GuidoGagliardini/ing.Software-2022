const PokeModel = require('./pokeModel');
const UsersModel = require('./usersModel');

//Representación de una relación 1N donde un post puede tener una categoría y una categoría muchos post
PokeModel.belongsTo(UsersModel);
UsersModel.hasMany(PokeModel);
/*
//Representación de una relación NN donde un post puede tener varias categorías
  Post.belongsTo(Categoria, {through: 'post_categoria'})
  Categoria.belongsTo(Post, {through: 'post_categoria'})
*/

module.exports = {
  PokeModel,
  UsersModel
}