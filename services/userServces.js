
//Services vendria a ser Controller.
var express = require('express');
var axios  = require ('axios');
var router = express.Router();
const UsersModel =  require('../models/usersModel');



const getUser =async (email)=>{
    const dataUser =  await UsersModel.findAll({
        where: {email}
    })

    console.log(dataUser)
}
const createUsers = async (name,email)=>{
   //simulacion de creacion de usuario
   try {
    const userJson = {name : name ,email : email};
    const post = await UsersModel.create(userJson);
    return post;
   } catch (error) {
     console.log(error);
     return error;
   }
}

module.exports={getUser,createUsers};