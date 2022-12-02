module.exports={
    HOST: "localhost",
    USER: "root",
    PORT: "3306",
    PASSWORD: "",
    DB: "base_de_datos",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
    /*
    Descripcion de objeto POOL.

    Pool => Un pool de conexiones es un conjunto limitado de conexiones a una base de datos, que es manejado por un servidor de aplicaciones de forma tal, que dichas conexiones pueden ser reutilizadas por los diferentes usuarios.


    max: maximum number of connection in pool
    min: minimum number of connection in pool
    idle: maximum time, in milliseconds, that a connection can be idle before being released
    acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error
    */
}