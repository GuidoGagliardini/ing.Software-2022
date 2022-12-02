
//Services vendria a ser Controller.
var express = require('express');
var axios  = require ('axios');
var router = express.Router();
const UsersModel =  require('../models/usersModel');



const getUser =(user,password)=>{
    //este paso simularia a una peticion a la base de datos
    // y una validacion de si el usuario existe en nuestra base de datos
    const userMock = 'ingenieriasoftware';
    const passwordMock = '123456';
    if (userMock===user && passwordMock===password){
        return true;
    }else return false;
}
const createUsers = async (name,email)=>{
   //simulacion de creacion de usuario
   const userJson = {name : name ,email : email};
   console.log(userJson)
   const post = await UsersModel.create(userJson);
   console.log('POSTTTTTT',post);
 
}

module.exports={getUser,createUsers};