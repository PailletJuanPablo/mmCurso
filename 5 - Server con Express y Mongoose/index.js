
//Cargamos el modulo de MongoDB con mongoose
let mongoose = require('mongoose');

//Cargamos el fichero app creado para utilizarlo en las rutas
let app = require('./config');

//Configuramos el puerto de la Api
let port = 1234;

// Especificamos la base hacia donde nos conectaremos
let baseDatos = "cine"

// Ejecutamos el método connect de la variable que contiene a Mongoose
mongoose.connect('mongodb://localhost:27017/'+baseDatos,  { useNewUrlParser: true },
(err,res)=>{
    if (err) {
        throw err;
    }else{
        console.log("Se realizó la correción a la base de datos"+baseDatos);
        //Empezamos a escuchar el puerto
        app.listen(port,()=>{
            console.log("Server listening on port "+port)
        })
    }
});

