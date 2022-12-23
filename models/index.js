const PokeModel = require('./pokeModel');
const UsersModel = require('./usersModel');

UsersModel.belongsToMany(PokeModel, {through: 'getPoke'});
PokeModel.belongsToMany(UsersModel);


module.exports = {
  PokeModel,
  UsersModel
}