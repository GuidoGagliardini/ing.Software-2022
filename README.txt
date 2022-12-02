Ingeneria de software 2022

El proyecto consta de una API REST sobre Pokemones. En el cual mediante los diferentes endpoints vamos a poder ver las difertenes funciones que tiene esta api.
Se dividio el proyecto en una parte de servicios, donde hacemos las peticiones HTTP y simulamos la creacion y obtencion de usuario, y otra en las routes donde hacemos las funciones de estos endpoints.
Utilizamos la pokeapi, que nos brinda gran cantidad de informacion para poder trabajar.

*Aclaracion: Se ejecuta en el puerto 3001, debido que al momento que estabamos relizando
la actvidad, ese puerto estaba en uso y decicimos cambiarlo. Tener atencion al ejectuar
esta api, que por default Node js, corre sus servicios en el puerto 3000.

Endpoints :

localhost:3001/  : consulto todos los pokemones
localhost:3001/:id : consulto un pokemon en particular. como tambien asi podemos ralizar difreentes acciones sobre este mismo endpoint, como eliminar y actualizar algun personaje. 


localhost:3001/users/login : en este endpoint simulamos un logeo, donde podemos ingresar al sitio. Usuario simulado : user: ingenieriasoftware password: 123456
localhost:3001/users/create : en este endpoint podemos crear un usuario y nos devuelve una respuesta, si fue creado correctamente o no. 

En el codigo, estan comentados como fuimos llevando a cabo algunos procesos, y algunas cuestiones que se nos presentaron a la hora de trabajar con la pokeapi y con algun otro problema que se presento. 
