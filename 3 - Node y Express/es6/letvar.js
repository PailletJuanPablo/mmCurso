// Con let definimos una variable que solo pertenecerá a un scope determinado
// Si es asignada fuera del ámbito de una función, pertenecerá al scope global
let nombre = "Juan";


function saludar1(){
    // Si es asignada dentro de una función, pertenecerá solamente al scope de la misma
    let nombre = "Jose";
    console.log(nombre)
}

function saludar2(){
    console.log(nombre)
}


 //saludar1()
 //saludar2()
