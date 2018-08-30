// Las promesas son un tipo de objeto que pueden o no producir un valor en el futuro

// Definimos una variable de prueba
let verification = false; 

//Creamos la promise, definiendo una variable y ejecutando new Promise
let promesa = new Promise((resolve, reject)=>{
    // EL comando new Promise recibe 2 parámetros, resolve y reject.
    // Resolve se aplica cuando la función se ejecuta correctamente
    // Reject cuando falla
    if (verification == true){
        // Si la variable verificación es true, ejecutamos el resolve y devolvemos una cadena 
        resolve ("Todo ok!")
    }else{
        // Si la variable es false, ejecutamos el reject y devolvemos un error
        reject("Error!")
    }
});

promesa.then((res)=>{
    console.log(res);
}, (err)=>{
    console.log(err)
})