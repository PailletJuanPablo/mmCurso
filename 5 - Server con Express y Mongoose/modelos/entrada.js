// Importamos mongoose para utilizarlo
let mongoose = require('mongoose');

//Creamos un objeto del tipo Schema para configurar modelos
let Schema = mongoose.Schema;

//Creamos el modelo de Entrada
let ModeloEntrada = Schema({
    persona: String,
    //Establecemos que una entrada pertence a una fecha
    fecha: {type: Schema.ObjectId, ref: 'Fecha'}
});

//Lo exportamos
module.exports = mongoose.model('Entrada', ModeloEntrada);