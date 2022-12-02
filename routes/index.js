var express = require('express');
var router = express.Router();
const service = require('./../services/httpServices')

/* GET home page. */
const getPoke = async (req,res,next)=>{
  try {
    const data = await service.dataPoke();
    res.json({data: data.data.results})
  } catch (error) {
    console.log(error);
    res.json({message:"Internel Server Error"})
  }
}
const getPokebyId = async (req,res,next) =>{
  try {
    const {id} = req.params;
    const data = await service.dataPokeId(id)
    res.json({data: data.data})
  } catch (error) {
    console.log(error)
    res.json({message:"Pruebe con otro numero"})
  }

}
const deletePoke =  async (req,res,next)=>{
    try {
      // la api a cual estamos consumiendo para obtener los datos, 
      // actualmente tiene bloqueada la posibilidad de borrar
      // y o editar el pokemon, por ende, haremos una simulacion
      // de como seria un DELETE.
      const {id}= req.params;
      const data = service.dataPokeId(id)
      res.json({message:`Eliminar poke id ===> ${id}`});
      // el proceso es el mismo que el de obtener un pokemon por su ID o algun
      // idenficadoe en particular, la diferencia esta en el servicio que llamamos
      // y que haga la la accion que querramos, en este caso DELETE 
    } catch (error) {
      console.log("Error");
      res.json({message:"error al eliminar pokemon"})
    }
}
const updatePoke =  async (req,res,next)=>{
  try {
    //  tampoco podemos actualizar datos, pero explicaremos y como seria el procesos de actualizar un campo
    const {id}= req.params;
    //recibimos el id, por params como los demas metodos, lo que tendremos que recibir tambien seria, el dato que querramos cambiar.
    const {datos} = req.body;
    // de body traemos los datos de un supuesto formulario completado por el usuario
    const result = await service.updatePoke(id,datos)
    //le enviamos el ID, y el dato a cambiar.
    res.json({message:`El pokemon '${id}', agrego o actualizo uno de sus campos 
    con el campo que ingreso el usuario '${datos}' -----------------------------si este campo esta en 'undefined' recuerde poner como nombre de formulario o como KEY en la prueba, desde Postman o cualquier aplicacion para probar apis, el nombre DATOS, asi esta configurada la api para que reciba ese nombre de KEY. una vez configurado esto podra ver los values que ingreso en pantalla`});
  } catch (error) {
    console.log("Error");
    res.json({message:"RECUERDE PONER COMO NOMBRE DE CAMPO 'DATOS'"})
  }
}

router.get('/', getPoke);
router.get('/:id',getPokebyId);
router.delete('/:id',deletePoke);
router.put('/:id', updatePoke);

module.exports = router;
