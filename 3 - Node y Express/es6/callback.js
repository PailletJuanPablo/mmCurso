// Funcion que se ejecuta cuando algo sucede

// Definimos la funcion GetPost, que recibe un id y retornará un callback con un post
let getPost = (id, callback) => {

    let post = { titulo: "Titulo del post", fecha: new Date().toLocaleString()}

    callback(post)
}

// Ejecutamos la función, y con el Callback recibido hacemos lo que queramos
getPost(12, (respuestaCallback)=>{
        console.log(respuestaCallback)
})

