const nombre = "Isaac";
let edad = 19;
const tieneMascota = false;

edad = 20;
const tieneMascota2 = true;

console.log("nombre:", nombre, "- tipo:", typeof nombre);
console.log("edad:", edad, "- tipo:", typeof edad);
console.log("tieneMascota:", tieneMascota2, "- tipo:", typeof tieneMascota2);

const frase = nombre + " tiene " + edad + " años y " + (tieneMascota2 ? "sí" : "no") + " tiene mascota.";
console.log(frase);