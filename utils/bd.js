const config = require('../config/db.config');
const Sequelize = require("sequelize");

const  sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
    host : config.HOST,
    port : config.PORT,
    dialect: config.dialect
    }
)
const conectDB = async()=>{
    try {
        await sequelize.authenticate();
        console.log("Conectado a la BD")
    } catch (error) {
        console.log(error);
        return process.exit();
    }
}

module.exports={conectDB,sequelize}