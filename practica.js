const altura = 180;
const acompanada = true;
const RespetoNormas = true;
function puedeSubir (altura, acompanada, RespetoNormas) {
    if (RespetoNormas === false ) {
        console.log("No puede subir por no respetar las normas");
    }
    else if (altura >= 140 && altura < 200) {
    console.log("Puede subir"); 
    }
    else if (altura < 140 && altura > 120 && acompanada === true) {
     console.log("Puede subir acompañado"); 
    }else 
    {
        console.log("No puede subir");
    }

}
console.log(puedeSubir(130, true, true));
