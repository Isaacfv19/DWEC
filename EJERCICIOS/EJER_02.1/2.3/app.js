

import { agregarLibro, obtenerLibros } from "./biblioteca.js";

console.log("Colección inicial:");
console.log(obtenerLibros());

agregarLibro({
  id: 11,
  titulo: "El nombre de la rosa",
  autor: "Umberto Eco",
  paginas: 512,
});

console.log("Colección después de agregar un libro:");
console.log(obtenerLibros());