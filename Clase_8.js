let edad = 19
if  (edad <= 0) {
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
}
else if (edad <= 18) {
    console.log("No puede pasar al bar.");
 
} else if (edad < 21) {
    console.log("Puede pasar al bar pero no puede beber alcohol.");    
 }
 else {
    console.log("Puede pasar al bar y puede beber alcohol.");
}

if (edad === 21){  
console.log("Felicidades por cumplir la mayoria de edad");
 }
 if (edad%2 !== 0) {
     console.log("¿Sabías que tu edad es impar?");
 } 
