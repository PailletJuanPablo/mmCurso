// Las funciones de flecha nos permiten definir funciones de una manera más limpia y clara. 
// Fué tomado de Coffescript, un metalenguaje de Javascript compilado

getNombre = () => {
    console.log("Juan")
}

// No conservan el contexto (ELEMENTO PRINCIPAL)
let flecha = () => {
    this.getNombre()
}

let saludo = function() {
  this.getNombre()
};

//flecha() 
saludo()


