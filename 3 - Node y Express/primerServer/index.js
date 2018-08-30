// Creamos una variable del tipo const e importamos en la misma el módulo http de node
const http = require('http');
const momento = require('./momento');
// Llamamos a la función createServer, que recibe una request y envía una respuesta


let server = http.createServer((req,res)=>{
    console.log("Entro un nuevo usuario!");
    res.write("Hola desde Node!");
    res.end()
});


// Posteriormente, le decimos que el servidor escuchará el puerto 1234
// Para poder correrlo en navegador, deberemos abrir el puerto en nuestro host local
// Url: http://localhost:1234

server.listen(1234,()=>{
    console.log("Servidor corriendo en puerto 1234, la fecha actual es "+momento.getMomento())
});

