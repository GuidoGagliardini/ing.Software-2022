
//Services vendria a ser Controller.
var express = require('express');
var axios  = require ('axios');
var router = express.Router();
const UsersModel =  require('../models/usersModel');



const getUser =async (email)=>{
    const dataUser =  await UsersModel.findOne({
        where: {email}
    })

    console.log(dataUser)
}
const getAllUsers =  async ()=>{
    const dataUser = await UsersModel.findAll();
    // return {...dataUser}
    console.log(dataUser)
    return dataUser
}
const getUserById =  async (id)=>{
    const user = await UsersModel.findAll({
        where: {id}
    });
    console.log(user)
    return user;
}
const createUsers = async (name,email)=>{
   try {
    const userJson = {name : name ,email : email};
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
        console.log(deleteData)
        return deleteData;
    } catch (error) {
        return error;
    }
}

const updateUser = async (id,updateData)=>{
    try {
        console.log(updateData)
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

module.exports={getUser,createUsers,getAllUsers,deleteUser,updateUser,getUserById};