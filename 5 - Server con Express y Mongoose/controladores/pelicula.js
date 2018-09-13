// Controlador para manejar los artistas

"use strict";

//Importamos los modelos Mongoose para poder acceder a sus metodos

var Pelicula = require("../modelos/pelicula");
var Fecha = require("../modelos/fecha");

// Creamos una función para obtener películas
let obtenerPeliculas = (req, res) => {
    Pelicula.find()
    .populate('fechas')
    // COn populate devolvemos el artista del album
    // Con exec ejecutamos la query
    .exec((err, peliculas) => {
      if (err) {
        //Si hay un error, enviamos la respuesta aclarándolo
       return res.status(404).send("Hubo un error obteniendo peliculas");
      } else {
       return res.status(200).send(peliculas)
       }
    });
};

// Creamos una función para crear películas
let crearPelicula = (req, res) => {
  let nuevaPelicula = new Pelicula(req.body);
  nuevaPelicula.save((err, pelicula) => {
    if (err) {
      //Si hay un error, enviamos la respuesta aclarándolo
      return res.status(404).send("Hubo un error creando la pelicula");
    } else {
      return res.status(200).send(pelicula)
     }
  });
};

// Creamos una función para crear películas
let crearFecha = (req, res) => {
  //Lo primero será veríficar si la película existe
  Pelicula.findById(req.body.pelicula).exec((err,pelicula)=>{
    // Si no existe, devolvemos un error
    if (err){
      res.status(404).send("La pelicula no existe")
    } else {
      //Comenzamos la lógica de la fecha si la película existe
      var nuevaFecha = new Fecha(req.body);
      //Creamos la fecha con el body y la guardamos
      nuevaFecha.save().then((guardada)=>{
          // Una vez guardada
          pelicula.fechas.push(guardada._id);
          pelicula.save();
          res.status(200).send({message:"Guardada!",fecha:guardada,pelicula:pelicula})
      })
    }
  })
};


module.exports = {
obtenerPeliculas,
crearPelicula,
crearFecha
};
