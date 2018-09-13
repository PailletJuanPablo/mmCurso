'use strict'

// Importamos express y body parser, creamos una var para usarlo
var express = require('express');
var bodyParser = require('body-parser');
// Inicialiamos express en otra variable
var app = express();
// Decimos que utilizaremos bodyparser. Esto permite recibir peticiones POST con un cuerpo (EJ: un formulario)
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json());

// Importamos los archivos que contienen las rutas a través de un require
var controladorPelicula = require("./controladores/pelicula");


// Configuramos cabeceras HTTP
// Esto permitirá recibir peticiones de cualquier origen
app.use((req,res,next)=>{
    res.header('Acces-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization,X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, POST, PUT,DELETE');
    res.header('Allow','GET, POST, PUT,DELETE');
    next()
});

//rutas base
app.get("/peliculas",controladorPelicula.obtenerPeliculas);
app.post("/peliculas",controladorPelicula.crearPelicula);
app.post("/fechas",controladorPelicula.crearFecha);


module.exports = app;
