// Definimos una variable

let getMomento = () => {
    return new Date().toLocaleString();
}

// A través de la palabra reservada module, accedemos al método export 
// donde enviamos un objeto con lo que queremos exportar
module.exports = {
    getMomento
}