// Ejercicio 1.6: Objetos con Arrays de Objetos Anidados

const cursos = [ // Array de cursos; cada curso tiene un array anidado de estudiantes
  { nombre: "JavaScript", profesor: "Carlos Ruiz", estudiantes: [{ nombre: "Ana", calificacion: 8 }, { nombre: "Luis", calificacion: 9 }, { nombre: "Marta", calificacion: 7 }] },
  { nombre: "TypeScript", profesor: "Laura Gómez", estudiantes: [{ nombre: "Pablo", calificacion: 6 }, { nombre: "Sara", calificacion: 7 }, { nombre: "Iván", calificacion: 5 }] },
  { nombre: "React", profesor: "Miguel Torres", estudiantes: [{ nombre: "Elena", calificacion: 9 }, { nombre: "Raúl", calificacion: 8 }, { nombre: "Nuria", calificacion: 10 }] },
  { nombre: "Node.js", profesor: "Rosa Martín", estudiantes: [{ nombre: "Hugo", calificacion: 3 }, { nombre: "Lucía", calificacion: 5 }, { nombre: "Dani", calificacion: 6 }] }, // Tiene una nota menor a 4
];

const resumenCursos = cursos.map((curso) => ({ // map crea un objeto resumen por cada curso
  nombreCurso: curso.nombre, // Nombre del curso
  promedioCalificaciones: curso.estudiantes.reduce((suma, est) => suma + est.calificacion, 0) / curso.estudiantes.length, // Suma de notas dividida entre nº de estudiantes
}));

console.log(resumenCursos); // Muestra el resumen de todos los cursos

const cursosDestacados = resumenCursos.filter((curso) => curso.promedioCalificaciones >= 7); // filter deja solo los cursos con promedio >= 7

cursosDestacados.forEach((curso) => { // Recorre cada curso destacado
  console.log(`📘 El curso ${curso.nombreCurso} tiene un promedio de ${curso.promedioCalificaciones.toFixed(2)} y es considerado destacado.`); // toFixed(2) limita a 2 decimales
});

cursos.forEach((curso) => { // Recorre los cursos originales
  const hayNotasBajas = curso.estudiantes.some((est) => est.calificacion < 4); // some devuelve true si algún estudiante tiene nota < 4
  if (hayNotasBajas) { // Si hay alguna nota muy baja, avisa
    console.log(`⚠️ Atención: En el curso ${curso.nombre} hay estudiantes con calificaciones muy bajas.`);
  }
});