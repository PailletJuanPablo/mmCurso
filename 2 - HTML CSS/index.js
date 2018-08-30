// Cargar el modulo HTTP para levantar el servidor
var http = require("http");



// Creamos el servidor y configuramos una respuesta para todas las peticiones
// Dispone de un request (req), que es la petición enviada por el usuario
// Y una response (res), que es la respuesta que se le envía al mismo
var server = http.createServer((req, res)=>{
    console.log("Nueva petición recibida.");
    //Enviamos una respuesta al cliente (usuario que ingresa a nuestro servidor)
    res.write("Hola Mundo");
    //Finalizamos la respuesta, de otra manera se quedará cargando infinitamente hasta que cerremos el server
    res.end();
});

// Si hay algún error, lo imprimimos en consola.
server.on('error', function (e) {
    // La variable 'e' contiene los detalles del error
    console.log(e);
  });

// Escuchamos el puerto 8080
server.listen(8080)

// Una vez que el servidor se ejecute correctamente, lo enviamos en consola
console.log("Servidor funcionando en http://localhost:8080/");
