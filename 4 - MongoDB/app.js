'use strict'

// Importamos express y body parser

var express = require('express');
var bodyParser = require('body-parser');

// Creamos una var para inicializar express, como así también un constructor para recibir peticiones body
var app = express();
app.use(bodyParser.urlencoded());

//Cargamos las rutas
var rutasUsuario = require('./rutas/usuarios');

// Configuramos bodyparser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//rutas base
app.use('/usuarios/', rutasUsuario);

// Lo Exportamos para importarlo en el archivo index.js
module.exports = app;
