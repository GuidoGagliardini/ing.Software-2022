var express = require('express');
var axios  = require ('axios');
const PokeModel =  require('../models/pokeModel');
var router = express.Router();



const dataPoke = async ()=>{
    try {
        const result = await axios.default.get('https://pokeapi.co/api/v2/pokemon/');
        let arraySplice = result.data.results.slice(-5);
        arraySplice.forEach(async i => {
            try {
                let pokeJson ={
                    name: i.name,
                    type:"Tierra"
                }
                let saveData = await PokeModel.create(pokeJson);
            } catch (error) {
                console.log(error);
                return error;
            }
        })

        return result;
    } catch (error) {
        return error;
    }
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
const getPokesSave =  async ()=>{
    const dataPoke = await PokeModel.findAll();
    return dataPoke;
}
module.exports = {dataPoke,dataPokeId,updatePoke,getPokesSave};