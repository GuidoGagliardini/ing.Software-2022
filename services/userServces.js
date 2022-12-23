
//Services vendria a ser Controller.
var express = require('express');
var axios  = require ('axios');
var router = express.Router();
const UsersModel =  require('../models/usersModel');
const PokeModel =  require('../models/pokeModel');
const { associations } = require('../models/usersModel');




const getUser =async (email)=>{
    const dataUser =  await UsersModel.findOne({
        where: {email}
    })
}
const getAllUsers =  async ()=>{
    const dataUser = await UsersModel.findAll();
    return dataUser
}
const getUserById =  async (id)=>{
    const user = await UsersModel.findAll({
        where: {id}
    });
    return user;
}
const createUsers = async (name,email,id_poke)=>{
   try {
    const userJson =
     {  name : name ,
        email : email,
        id_poke};
    const post = await UsersModel.create(userJson);
    return post;
   } catch (error) {
     console.log(error);
     return error;
   }
}
const deleteUser = async(id)=>{
    try {
        const deleteData = await UsersModel.destroy({
            where:{id}
        })
        return deleteData;
    } catch (error) {
        return error;
    }
}

const updateUser = async (id,updateData)=>{
    try {
        const updateAction = await UsersModel.upsert(
                {
                    id: id,
                    name: updateData.name,
                    email: updateData.email
                }
            )
        return updateAction;
    } catch (error) {
        return error
        
    }
}
const userWhitPoke = async (id)=>{
    try {
        const usersWhitPoke = await UsersModel.findAll({
            include: PokeModel
        });
        console.log("🚀 ~ file: userServces.js:70 ~ userWhitPoke ~ usersWhitPoke", usersWhitPoke)
        
        return usersWhitPoke;
    } catch (error) {
        return error;
    }
}

module.exports={getUser,createUsers,getAllUsers,deleteUser,updateUser,getUserById,userWhitPoke};