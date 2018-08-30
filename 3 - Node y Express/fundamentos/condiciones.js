// Condiciones y cambios

var numero1 = 10;
var numero2 = 10;

if (numero1 > numero2) {
  console.log("Numero 1 es mayor!");
} else {
  console.log("Numero 2 es mayor!");
}


// Pueden concatenarse muchas condiciones

if (numero1 > numero2 ){
    console.log("Numero 1 es mayor!")
} else if (numero1 == numero2){
    console.log("Numero 1 y Numero 2 son iguales!")
} else{
    console.log("Numero 2 es mayor!")
}



// Otra forma de validar multiples expresiones es switch


var dia = "S";
switch(dia){
    case "L":
    console.log("Es lunes!");
    break;

    case "M":
    console.log("Es martes!");
    break
    
    default:
    console.log("Es otro día!")
    break;
}
