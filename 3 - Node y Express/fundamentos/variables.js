// Principales tipos de variables

/*
Para declarar una variable escribimos

var nombreVariable = Valor
*/

// Numbers
var numero = 2;
// Para decimales no utilizamos coma, sino punto
var numeroDecimal = 1122.32;

// Strings 
var cadena = "Hola";


// Booleanos
var booleano = true || false;

// Arrays - Grupo de Variables
var colores = new Array("rojo","azul",numero,numeroDecimal,booleano);
var array2 = ["Elem 1", true, 13];


// Objects - Elementos que tienen diferentes atributos
var color = new Object({
    nombre: "Rojo",
    nroHexa: "ff0000",
    cssHandler: "red",
    imprimirHexa: function(){
        console.log( this.nroHexa)
    }
});

color.imprimirHexa()

var objeto2 = {
    propiedad1: "Rojo",
    propiedad2: "ff1123"
}

// numero = "HOLA"
// console.log(numero)