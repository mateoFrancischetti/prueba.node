let peliculas = ["star wars","totoro","rocky","pulp fiction","la vida es bella"]
for (let i = 0; i < peliculas.length; i++) {
    // const peli = peliculas[i];
   // peli = peli.toUpperCase(); NOOOO se puede
    peliculas[i] = peliculas[i].toUpperCase();
}
console.log(peliculas);
// ASI SE HACE CON FUNCION
function aMayus(array) {
    for (let i = 0; i < peliculas.length; i++) {
        peliculas[i] = peliculas[i].toUpperCase();
}
return array }

const nuevoArray = aMayus(peliculas)
console.log(nuevoArray);
// Microdesafios
const puntajes = [12,34,56,34,5,8,76,4,1,90]


for (let index = 0; index < puntajes.length; index++) {
 // console.log(puntajes[index]);
    }

const preciosSinIVA = [1200,340,560,30400,500,80,1000,90000];
//const Iva = 1.21;
for (let i = 0; i < preciosSinIVA.length; i++) {
   // console.log(preciosSinIVA[i]*iva);
}
const PreciosSinIVA = [1200,340,560,30400,500,80,1000,90000];
const iva = 1.21;
function guardarPreciosConIVa(PreciosSinIVA) {
    let preciosConIva = [];
    for (let i = 0; i < PreciosSinIVA.length; i++) {
    preciosConIva.push(preciosSinIVA[i]*iva);
    }
    return preciosConIva
}
function mostrarPreciosConIva(array) {
    for (let i = 0; i < array.length; i++) {
       console.log(array[i]);
    }
}
//const preciosConIva = guardarPreciosConIVa (preciosSinIVA); mostrarPreciosConIva(preciosConIva)
//console.log(preciosConIva);


//const preciosSinIVA = [1200,340,560,30400,500,80,1000,90000];
//const iva = 1.21;
const limiteParaDescuento = 4000;
const descuento = 0.75; 

function guardarPreciosConIva(preciosSinIVA) {
    let preciosConIva = [];
    for (let i = 0; i < preciosSinIVA.length; i++) {
       preciosConIva.push(preciosSinIVA[i]* iva);   
    }
    return preciosConIva;

}
function aplicarDescuento(array) {
    let res = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > limiteParaDescuento) {
            res.push(element * descuento);
        }
    }
    return res;
}
function mostrarPrecios(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        
    }
}
const preciosConIva = guardarPreciosConIVa(preciosSinIVA);
const preciosConDescuento = aplicarDescuento(preciosConIva);
mostrarPrecios(preciosConIva);
console.log(preciosConDescuento);
mostrarPrecios(preciosConDescuento)