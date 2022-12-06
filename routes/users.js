var express = require('express');
var router = express.Router();
const service = require('./../services/userServces');

const getUser = async (req,res,next)=>{
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
    console.log(result, "REsutl");
    res.json({user: result})
  } catch (error) {
    res.json({error: "error"})
  }
}
router.post('/login',getUser);
router.post('/create', createUser)
module.exports = router;
