// Ejercicio 1.1: Variables, Tipos de Dato y Strings

const nombre = "Juan"; 
// Constante de tipo string (no se puede reasignar)
let edad = 30; 
// Variable de tipo number (se puede reasignar)
const tieneMascota = false;
 // Constante de tipo boolean (true o false)

edad = 31; 
// Reasigna la edad (válido porque es let)
let tieneMascotaNueva = true; 
// Con const no se puede reasignar, así que uso una variable let con el nuevo valor

console.log("nombre:", nombre, typeof nombre); 
// Muestra el valor y el tipo (string)
console.log("edad:", edad, typeof edad); 
// Muestra el valor y el tipo (number)
console.log("tieneMascota:", tieneMascotaNueva, typeof tieneMascotaNueva); 
// Muestra el valor y el tipo (boolean)

// Template string: comillas invertidas e ${} para insertar variables; el ternario elige "tiene" o "no tiene"
const frase = `${nombre} tiene ${edad} años y ${tieneMascotaNueva ? "tiene" : "no tiene"} mascota.`;
console.log(frase); // Imprime la frase final