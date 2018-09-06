// El controlador se conectará a la base de datos para poder consultar y manipular información

"use strict";

//Importamos los modelos Mongoose para poder acceder a sus metodos

var Usuario = require("../modelos/usuario");


// Creamos una función para obtener todos los usuarios
let obtenerUsuarios = (req, res) => {

    //Creamos una variable id que recibe el parametro enviado
    let id = req.params.id;

    if(id != undefined){
        //En este If, recibimos un id de usuario para consultar
        //Utilizamos el método findById para obtener un usuario basado en su id
        Usuario.findById(req.params.id).exec().then((user)=>{
            //enviamos una respuesta con el usuario obtenido
            res.send(user)
        }).catch((err)=>{
            res.send(err)
        })
    }else{
        Usuario.find().exec().then((users)=>{
            res.send(users)
        }).catch((err)=>{
            res.send(err)
        })
    }
}

// Función para crear un usuario
let crearUsuario = (req, res) => {
    // Los campos vienen del cuerpo de la request
   Usuario.create(req.body).then((usuario)=>{
       // Una vez creado, lo devolvemos en la respuesta
       res.send(usuario)
   })
}

//Funcion para actualizar un usuario
let actualizarUsuario = (req,res) => {
    // para la función actualizar necesitamos 2 parametros, el id y el cuerpo que tendrá la actualización
    let dataActualizacion ={
        nombre: req.body.nombre,
        edad: req.body.edad
    }
    Usuario.findByIdAndUpdate(req.params.id,dataActualizacion).then((actualizado)=>{
        res.send("Actualizado!")
    })
    
}

//Función para eliminar un usuario
let eliminarUsuario = (req,res) => {
    Usuario.findByIdAndRemove(req.params.id).then((eliminado)=>{
        res.send(eliminado)
    })
}

      
        
module.exports = {
    obtenerUsuarios,
    crearUsuario,
    eliminarUsuario,
    actualizarUsuario
};
