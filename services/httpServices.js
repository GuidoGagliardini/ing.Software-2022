var express = require('express');
var axios  = require ('axios');
var router = express.Router();



const dataPoke = async ()=>{
    const result = await axios.default.get('https://pokeapi.co/api/v2/pokemon/');
    return result;
}
const dataPokeId = async (id)=>{
    const result = await axios.default.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return result;
}
const updatePoke = async (id,data)=>{
    //aca recibo el ID y el dato a modificar, y el proceso seria, 
    //const result = await axios.default.update(`url${id}`,data);
    const result = await axios.default.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return result;
}
module.exports = {dataPoke,dataPokeId,updatePoke};