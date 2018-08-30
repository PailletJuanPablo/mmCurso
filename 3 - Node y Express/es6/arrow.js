// Las funciones de flecha nos permiten definir funciones de una manera más limpia y clara. 
// Fué tomado de Coffescript, un metalenguaje de Javascript compilado

let nombre = "Juan";
getNombre = () => {
    return "Juan"
}

// No conservan el contexto
let flecha = () => {
    console.log(this.getNombre())
}

let saludo = function() {
    console.log(this.getNombre())
}
flecha()
saludo()


