// Importamos mongoose para utilizarlo
let mongoose = require('mongoose');

//Creamos un objeto del tipo Schema para configurar modelos
let Schema = mongoose.Schema;

//Creamos el modelo de Fecha
let ModeloFecha = Schema({
    fecha: String,
    observaciones: String,
    //Establecemos que una fecha pertenece a una película
    pelicula: {type: Schema.ObjectId, ref: 'Pelicula'},
    //Establecemos que una fecha puede tener muchas entradas
    entradas: [{type: Schema.ObjectId, ref: 'Entrada'}]
});

//Lo exportamos
module.exports = mongoose.model('Fecha', ModeloFecha);