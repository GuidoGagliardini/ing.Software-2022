var express = require('express');
var router = express.Router();
const service = require('./../services/userServces');

const login = async (req,res,next)=>{
  try {
    const{email}=req.body
    const result = await service.getUser(email);
    console.log("🚀 ~ file: users.js:9 ~ getUser ~ result", result)
    res.json({logged:` True ${result}`})
   
  } catch (error) {
    console.log(error);
    res.json({message:"Error en user o password"})
    //res.sendStatus(403);
    //el servidor entiende la solicutd, pero se niega a autroizarla.
  }
}
const createUser = async (req,res,next)=>{
  try {
    const{name,email}=req.body
    const result = await service.createUsers(name,email);
    res.json({user: result})
  } catch (error) {
    res.json({error: "error"})
  }
}
const getAllUsers = async (req,res,next)=>{
  try {
    const allUsers = await service.getAllUsers();
    res.json({allUsers: allUsers})
  } catch (error) {
    console.log(error)
  }
}
const getUsersById = async (req,res,next)=>{
  try {
    const {id} = req.params;
    const user = await service.getUserById(id);
    user.length <= 0 ? res.json({user:"No existe usuario"}) :
    res.json({user: user });
  } catch (error) {
    res.json({error:error})
  }
}
const deleteUSer = async(req,res,next)=>{
  try {
    const {id} = req.params;
    const dataDelete = await service.deleteUser(id);
    dataDelete == 1 ? 
    res.json({message:"Eliminado correctamente"})
    :
    res.json({message:`NO se pudo borrar el usuario, el id = ${id} no existe en nuestra base de datos`})

  } catch (error) {
    res.json({error: error})
  }
}
const updateUsers = async(req,res,next)=>{
  try {
    const {id} = req.params;
    const {name,email} = req.body;
    let updateObject = {
      name: name,
      email: email
    }
    let results = await service.updateUser(id,updateObject);
    res.json({newDataUser: results})
  } catch (error) {
    res.json({error:error})
  }
}
const getUserWhitPoke = async (req,res,next)=>{
  try {
    const userPoke = await service.userWhitPoke();
    console.log("🚀 ~ file: users.js:76 ~ getUserWhitPoke ~ userPoke", userPoke)
    
    res.json({userPoke: userPoke})
  } catch (error) {
    console.log(error)
  }
}
router.post('/login',login);
router.post('/create', createUser);
router.get('/getAll', getAllUsers);
router.get('/getUserPoke', getUserWhitPoke);
router.get('/getUser/:id',getUsersById);
router.post('/delete/:id',deleteUSer);
router.put('/update/:id',updateUsers);

module.exports = router;
