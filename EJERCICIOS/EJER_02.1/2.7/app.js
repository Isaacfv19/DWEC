
import {
  agregarLibro,
  obtenerLibros,
  buscarLibro,
  eliminarLibro,
  calcularTotalPaginas,
  ordenarPorPaginas,
  hayLibrosLargos,
  todosSonLibrosCortos,
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

console.log(`Total de páginas: ${calcularTotalPaginas()}`);

console.log("Colección antes de ordenar:");
console.log(obtenerLibros());

ordenarPorPaginas();

console.log("Colección ordenada por páginas:");
console.log(obtenerLibros());

// Probar .some() con distintos límites
console.log("¿Hay libros de más de 500 páginas?", hayLibrosLargos(500));
console.log("¿Hay libros de más de 800 páginas?", hayLibrosLargos(800));
console.log("¿Hay libros de más de 900 páginas?", hayLibrosLargos(900));

// Probar .every() con distintos límites
console.log("¿Todos tienen menos de 500 páginas?", todosSonLibrosCortos(500));
console.log("¿Todos tienen menos de 863 páginas?", todosSonLibrosCortos(863));
console.log("¿Todos tienen menos de 1000 páginas?", todosSonLibrosCortos(1000));