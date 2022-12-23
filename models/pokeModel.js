const {Model,DataTypes} = require('sequelize');
const {sequelize} = require('../utils/bd');

class PokeModel extends Model{}

PokeModel.init({
    id_poke:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    type:{
        type:DataTypes.STRING,
    }
},
{
    sequelize,
    underscored:true,
    modelName: 'pokemones'
});
module.exports = PokeModel;