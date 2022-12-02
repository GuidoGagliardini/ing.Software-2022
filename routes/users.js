var express = require('express');
var router = express.Router();
const service = require('./../services/userServces');

const getUser = (req,res,next)=>{
  try {
    const{user,password}=req.body
    const result = service.getUser(user,password);
    result ? res.json({message:`Ingreso ok de usuario ${user}`}) : 
    res.send("Ingreso Invalido, pruebe con user ingenieriasoftware | password 123456");
  } catch (error) {
    console.log(error);
    res.json({message:"Error en user o password"})
    //res.sendStatus(403);
    //el servidor entiende la solicutd, pero se niega a autroizarla.
  }
}
const createUser = (req,res,next)=>{
  try {
    const{name,email}=req.body
    const result = service.createUsers(name,email);
  } catch (error) {
    res.json({error: "Errosino"})
    // res.sendStatus(403);
    //el servidor entiende la solicutd, pero se niega a autroizarla.
  }
}
router.post('/login',getUser);
router.post('/create', createUser)
module.exports = router;
