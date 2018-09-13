'use strict'
//Los modelos nos permiten definir la estructura que tendrán los diferentes documentos en nuestra base

// Importamos mongoose para utilizarlo
var mongoose = require('mongoose');

// Iniciamos una instancia de un esquema de objetos
var Esquema = mongoose.Schema;

//Creamos el modelo
var EsquemaUsuario = Esquema({
    nombre: String,
    edad: Number,
});

//Lo exportamos
module.exports = mongoose.model('Usuario', EsquemaUsuario);