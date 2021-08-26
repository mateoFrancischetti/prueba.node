// ESTO ES UNA BUENA PRACTICA 

const variable = "boca"
let  mensaje = "";
if (variable) {
mensaje = "truthy"
}
else {
    mensaje = "falsy";
}
console.log(mensaje);

// Lo mismo pero usando un TERNARIO 
const pagoCuota = true;
let msj = pagoCuota ? "Ya esta pago" : "Pagá"
console.log(msj);