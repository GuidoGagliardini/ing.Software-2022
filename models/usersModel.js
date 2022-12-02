const {Model,DataTypes} = require('sequelize');
const {sequelize} = require('../utils/bd');

class UsersModel extends Model{}

UsersModel.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(250),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(250),
    }
},
{
    sequelize,
    underscored:true,
    modelName: 'users'
});
module.exports = UsersModel