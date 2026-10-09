// app.js: prueba las funciones del módulo biblioteca.js (ejercicios 2.3 a 2.7)

import { agregarLibro, obtenerLibros, buscarLibro, eliminarLibro, calcularTotalPaginas, ordenarPorPaginas, hayLibrosLargos, todosSonLibrosCortos } from "./biblioteca.js"; // Importa todas las funciones exportadas

// --- 2.3: mostrar y agregar ---
console.log("Colección inicial:"); // Encabezado
console.table(obtenerLibros()); // Muestra los 10 libros en forma de tabla

agregarLibro({ id: 11, titulo: "Pedro Páramo", autor: "Juan Rulfo", paginas: 124 }); // Añade un nuevo libro
console.log("Colección tras agregar un libro:"); // Encabezado
console.table(obtenerLibros()); // Verifica que ahora hay 11

// --- 2.4: buscar y eliminar ---
console.log("Libro con id 3:", buscarLibro(3)); // Busca y muestra el libro con id 3

eliminarLibro(4); // Elimina "El principito" (id 4)
console.log("Colección tras eliminar el libro con id 4:"); // Encabezado
console.table(obtenerLibros()); // Muestra la colección final (10 libros)

// --- 2.5: total de páginas ---
console.log(`Total de páginas de todos los libros: ${calcularTotalPaginas()}`); // Imprime la suma de páginas

// --- 2.6: ordenar ---
console.log("Colección antes de ordenar:"); // Encabezado
console.table([...obtenerLibros()]); // Copia con spread para fijar el orden actual
ordenarPorPaginas(); // Ordena de menor a mayor número de páginas
console.log("Colección ordenada por páginas:"); // Encabezado
console.table(obtenerLibros()); // Muestra el resultado ordenado

// --- 2.7: some y every ---
console.log("¿Hay libros de más de 800 páginas?", hayLibrosLargos(800)); // true (Don Quijote tiene 863)
console.log("¿Hay libros de más de 1000 páginas?", hayLibrosLargos(1000)); // false
console.log("¿Todos tienen menos de 1000 páginas?", todosSonLibrosCortos(1000)); // true
console.log("¿Todos tienen menos de 300 páginas?", todosSonLibrosCortos(300)); // false
