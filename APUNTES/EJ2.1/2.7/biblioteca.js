// biblioteca.js: módulo para gestionar una biblioteca digital (versión final de los ejercicios 2.3 a 2.7)

const libros = [ // Colección inicial: 10 libros (id, titulo, autor, paginas)
  { id: 1, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", paginas: 863 },
  { id: 2, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", paginas: 471 },
  { id: 3, titulo: "1984", autor: "George Orwell", paginas: 328 },
  { id: 4, titulo: "El principito", autor: "Antoine de Saint-Exupéry", paginas: 96 },
  { id: 5, titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", paginas: 576 },
  { id: 6, titulo: "Fahrenheit 451", autor: "Ray Bradbury", paginas: 249 },
  { id: 7, titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez", paginas: 120 },
  { id: 8, titulo: "El Hobbit", autor: "J. R. R. Tolkien", paginas: 310 },
  { id: 9, titulo: "Rayuela", autor: "Julio Cortázar", paginas: 635 },
  { id: 10, titulo: "Platero y yo", autor: "Juan Ramón Jiménez", paginas: 160 },
];

export function agregarLibro(nuevoLibro) { // 2.3: añade un libro a la colección
  libros.push(nuevoLibro); // push lo inserta al final del array
}

export function obtenerLibros() { // 2.3: devuelve la colección completa
  return libros; // Devuelve el array de libros
}

export function buscarLibro(id) { // 2.4: busca un libro por su id
  return libros.find((libro) => libro.id === id); // find devuelve el primer libro que coincide (o undefined si no existe)
}

export function eliminarLibro(id) { // 2.4: elimina un libro por su id
  const indice = libros.findIndex((libro) => libro.id === id); // findIndex devuelve la posición del libro (o -1 si no existe)
  if (indice === -1) return false; // Si no existe, no se elimina nada
  libros.splice(indice, 1); // splice elimina 1 elemento desde esa posición
  return true; // Indica que se eliminó correctamente
}

export function calcularTotalPaginas() { // 2.5: suma las páginas de todos los libros
  return libros.reduce((total, libro) => total + libro.paginas, 0); // reduce acumula la suma empezando en 0
}

export function ordenarPorPaginas() { // 2.6: ordena los libros de menor a mayor número de páginas
  return libros.sort((a, b) => a.paginas - b.paginas); // sort con comparador numérico (modifica el array original)
}

export function hayLibrosLargos(limitePaginas) { // 2.7: ¿hay al menos un libro con más páginas que el límite?
  return libros.some((libro) => libro.paginas > limitePaginas); // some devuelve true si al menos uno cumple
}

export function todosSonLibrosCortos(limitePaginas) { // 2.7: ¿todos los libros tienen menos páginas que el límite?
  return libros.every((libro) => libro.paginas < limitePaginas); // every devuelve true solo si todos cumplen
}
