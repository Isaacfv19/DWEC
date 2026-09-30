
const libros = [
  { id: 1, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", paginas: 863 },
  { id: 2, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", paginas: 471 },
  { id: 3, titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", paginas: 487 },
  { id: 4, titulo: "1984", autor: "George Orwell", paginas: 328 },
  { id: 5, titulo: "El principito", autor: "Antoine de Saint-Exupéry", paginas: 96 },
  { id: 6, titulo: "Rayuela", autor: "Julio Cortázar", paginas: 635 },
  { id: 7, titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez", paginas: 122 },
  { id: 8, titulo: "Fahrenheit 451", autor: "Ray Bradbury", paginas: 249 },
  { id: 9, titulo: "El túnel", autor: "Ernesto Sabato", paginas: 168 },
  { id: 10, titulo: "Los renglones torcidos de Dios", autor: "Torcuato Luca de Tena", paginas: 592 },
];

export function agregarLibro(nuevoLibro) {
  libros.push(nuevoLibro);
}

export function obtenerLibros() {
  return libros;
}

export function buscarLibro(id) {
  return libros.find((libro) => libro.id === id);
}

export function eliminarLibro(id) {
  const indice = libros.findIndex((libro) => libro.id === id);

  if (indice !== -1) {
    libros.splice(indice, 1);
  }
}