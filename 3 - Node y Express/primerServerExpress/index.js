var express = require('express')
var app = express()
 
// Definimos nuestras primeras rutas

app.get('/', function (req, res) {
  res.send('Hola desde Rutas')
})

// En las rutas podemos enviar parametros
// Agregando un signo de pregunta al final del parametro lo convertimos en opcional
app.get('/hola/:nombre/:apellido',(req,res)=>{
    let nombre = req.params.nombre;
    let apellido = req.params.apellido;
    res.send("Hola "+nombre+ " "+ apellido)
});

//Podemos servir archivos estáticos y asignarles una ruta
app.use('/publico', express.static(__dirname +'/publico'));

// Especificamos el puerto donde escuchará nuestro servidor
app.listen(1234,()=>{console.log("Server listo en puerto 1234")})
