function sumar (num1, num2, num3) {
    return num1 + num2 + num3
}
console.log (sumar(2, 6, 10));

function restar (num1, num2) {
    return num1 - num2
}
console.log (restar (10, 6));

function multiplicacion (num1, num2) {
    return num1 * num2
}
console.log (multiplicacion (10, 6));

function dividir (num1, num2) {
    return num1 / num2
}
console.log (dividir (10, 5));

console.log (dividir (10, 0));

console.log (dividir (0, 5));


function cuadradoDeUnNumero (num1) {
    return multiplicacion(num1, num1)
}
console.log(cuadradoDeUnNumero(4,5));

function promedioDeTresNumeros(num1, num2, num3) {
    return dividir (sumar(num1, num2, num3), 3)
}
console.log(promedioDeTresNumeros(2,4,6));

function calcularPorcentaje(num1, num2) {
    return multiplicacion (dividir (num2, 100),num1 ) 
}
console.log(calcularPorcentaje(300,15));

function generadorDePorcentaje( num1, num2) {
    return dividir (multiplicacion( num1,100), num2)
}
console.log(generadorDePorcentaje(2,200));