// Importamos express
const express = require('express');
// Importamos body-parser (para recibir peticiones post)
const body_parser = require('body-parser');
// Inicializamos express dentro de una variable App
const app = express();
// Especificamos que esta variable APP (donde está express) utilizará body-parser para recibir peticiones body
app.use(body_parser.urlencoded({extended:true}));

let puerto = 1234; 
app.listen(puerto, (conexion)=>{
    console.log("server corriendo correctamente en puerto "+puerto)
});

// Definimos una ruta para manejar las peticiones GET
app.get('/hola', (req, res)=>{
    return res.send("Holaa");
});
// Definimos una ruta (puede ser la misma) para manejar las peticiones POST
// Una misma ruta puede comportarse diferente según el método recibido.
app.post('/hola', (req,res)=>{
    let cuerpoRecibido = req.body;
    return res.send({respuesta: "enviaste los siguientes datos:", datos: cuerpoRecibido.email})
});