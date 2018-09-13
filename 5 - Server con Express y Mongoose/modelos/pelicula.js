// Importamos mongoose para utilizarlo
let mongoose = require('mongoose');

//Creamos un objeto del tipo Schema para configurar modelos
let Schema = mongoose.Schema;

//Creamos el modelo de Película
let ModeloPelicula = Schema({
    titulo: {
        type: String,
        required: true
      },
    descripcion: String,
    categoria: String,
    //Establecemos que una película podrá tener muchas fechas
    fechas: [{type: Schema.ObjectId, ref: 'Fecha'}]
});

//Lo exportamos
module.exports = mongoose.model('Pelicula', ModeloPelicula);