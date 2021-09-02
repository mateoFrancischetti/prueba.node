// Colecciones de peliculas 

// Ejercicio 1 

let peliculas = ["star wars","totoro","rocky","pulp fiction","la vida es bella"]
console.log(peliculas[3]);

function mayusculas(array) {
  array[0] =  array[0].toUpperCase();
  array[1] =  array[1].toUpperCase();
  array[2] =  array[2].toUpperCase();
  array[3] =  array[3].toUpperCase();
  array[4] =  array[4].toUpperCase();
  return array 
}
peliculas = mayusculas(peliculas)
console.log(peliculas);



