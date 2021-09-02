// let num = 0;
// console.log(--num);

// function saludar(nombre) {
   // return "Hola" + nombre;
//}
//console.log (saludar("Martin"));

// console.log("5" == 5);

//console.log(5 + 3 + -12 == 5 && (-12 / 3 < 5 || 3 != -12))

//if (true) {
   // console.log("false");
//}
// else {
   // console.log("true");
// }

//const num1 = 1;
//const num2 = 1;
let mensaje1 = "Por favor ingrese números de 2 dígitos"
function sumatoria(num1, num2) {
    if (num1 > 9 && num2 > 9) {
        
        return num1 + num2
    } else {
        return mensaje1 
    }
}
console.log(sumatoria(18,75));

