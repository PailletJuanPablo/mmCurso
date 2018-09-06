//Utilizamos ES6
'use strict'

//Cargamos el modulo de MongoDB con mongoose
var mongoose = require('mongoose');

//Cargamos el fichero app creado para utilizarlo en las rutas
var app = require('./app');

//Configuramos el puerto de la Api
var puerto = 1234;

// Especificamos la base hacia donde nos conectaremos
mongoose.connect('mongodb://localhost:27017/base1',  { useNewUrlParser: true },
(err,res)=>{
    if (err) {
        throw err;
    }else{
        console.log("Estamos conectados!");
        //Empezamos a escuchar el puert
        app.listen(puerto,()=>{
            console.log("Servidor en puerto "+puerto)
        })
    }
});

