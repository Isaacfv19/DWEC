const libros = [
  { titulo: "Cien años de soledad", autor: "García Márquez", paginas: 410, categoria: "Ficción", precio: 25.00 },
  { titulo: "El poder del ahora", autor: "Eckhart Tolle", paginas: 235, categoria: "Autoayuda", precio: 15.50 },
  { titulo: "El código Da Vinci", autor: "Dan Brown", paginas: 689, categoria: "Misterio", precio: 12.75 },
  { titulo: "1984", autor: "George Orwell", paginas: 328, categoria: "Ficción", precio: 18.00 },
  { titulo: "Sapiens", autor: "Yuval Noah Harari", paginas: 498, categoria: "Historia", precio: 30.00 }
];

// 1.1 forEach
libros.forEach((libro) => console.log(`El libro ${libro.titulo} tiene ${libro.paginas} páginas.`));

// 1.2 map
const titulosYAutores = libros.map(({ titulo, autor }) => ({ titulo, autor }));
console.log(titulosYAutores);

// 2.1 filter
const librosDeFiccion = libros.filter((libro) => libro.categoria === "Ficción");
console.log(librosDeFiccion);

// 2.2 find
const libroBarato = libros.find((libro) => libro.precio <= 15.00);
console.log(libroBarato);

// 3.1 reduce
const totalPaginas = libros.reduce((acumulador, libro) => acumulador + libro.paginas, 0);
console.log(totalPaginas);

// 3.2 every y some
const todosSonLargos = libros.every((libro) => libro.paginas > 200);
const algunoEsCaro = libros.some((libro) => libro.precio > 28.00);
console.log(todosSonLargos, algunoEsCaro);

// 4.1 encadenamiento
const resultadoCadena = libros.filter((l) => l.paginas > 400).map((l) => l.titulo).join(" | ");
console.log(resultadoCadena);
