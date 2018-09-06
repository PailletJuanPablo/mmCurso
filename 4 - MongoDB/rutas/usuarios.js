'use strict'

//Creamos una instancia de express
var express = require('express');
//Importamos el controlador de usuario
var ControladorUsuario = require('../controladores/usuario');

//Utilizamos el modulo router de Express en una variable
var rutas = express.Router();

// Rutasd de la App
rutas.get("/listar/:id?",ControladorUsuario.obtenerUsuarios);
rutas.post("/crear",ControladorUsuario.crearUsuario);
rutas.post("/actualizar/:id",ControladorUsuario.actualizarUsuario);
rutas.post("/eliminar/:id",ControladorUsuario.eliminarUsuario)

// Lo exportamos para usar en app.js
module.exports = rutas;


