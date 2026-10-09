// Ejercicio 1.5: Uniendo todo

const estudiantes = [ // Array de objetos, uno por estudiante
  { nombre: "Ana", apellidos: "García López", calificacion: 8, aprobado: true },
  { nombre: "Luis", apellidos: "Pérez Ruiz", calificacion: 4, aprobado: false },
  { nombre: "Marta", apellidos: "Sánchez Gil", calificacion: 6, aprobado: false }, 
  // Incoherente a propósito para probar el paso 5
  { nombre: "Pablo", apellidos: "Díaz Mora", calificacion: 3, aprobado: true }, 
  // Incoherente a propósito para probar el paso 5
];

const estudiantesConId = estudiantes.map((est, indice) => ({ ...est, id: indice + 1 })); 
// map crea un array nuevo copiando cada estudiante y añadiendo un id (1, 2, 3...)

console.log(estudiantesConId); 
// Muestra los estudiantes con su id

const aprobados = estudiantes.filter((est) => est.calificacion >= 5); 
// filter se queda solo con los de calificación >= 5

aprobados.forEach((est) => { // Recorre cada aprobado
  console.log(`¡Felicidades ${est.nombre}, has aprobado con ${est.calificacion}!`); 
  // Mensaje con template string
});

estudiantes.forEach((est) => { // Recorre el array original para comprobar coherencia
  const deberiaAprobar = est.calificacion >= 5; // Valor que 'aprobado' debería tener según la nota
  if (est.aprobado !== deberiaAprobar) { // Si no coincide, hay incoherencia
    console.log(`⚠️ Incoherencia en el registro de ${est.nombre}: calificación = ${est.calificacion}, aprobado = ${est.aprobado}`); // Avisa del registro erróneo
  }
});