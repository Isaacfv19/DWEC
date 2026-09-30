// app.js

import {
  agregarLibro,
  obtenerLibros,
  buscarLibro,
  eliminarLibro,
  calcularTotalPaginas,
} from "./biblioteca.js";

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

console.log("Libro con id 4:");
console.log(buscarLibro(4));

eliminarLibro(2);

console.log("Colección final (sin el libro con id 2):");
console.log(obtenerLibros());

// Total de páginas de todos los libros
console.log(`Total de páginas: ${calcularTotalPaginas()}`);