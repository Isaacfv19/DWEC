
const estudiantes = [
  {
    nombre: "Isaac",
    apellidos: "Fernández Valdés",
    calificacion: 10,
    aprobado: true
  },
  {
    nombre: "Nacho",
    apellidos: "Perez Galvis",
    calificacion: 4,
    aprobado: false
  },
  {
    nombre: "Sergio",
    apellidos: "Caramazana Ibarlucea",
    calificacion: 0,
    aprobado: false
  },
  {
    nombre: "Kevin",
    apellidos: "Sánchez Gómez",
    calificacion: 3,
    aprobado: true // Esto ye para la incoherencia 
  }
];

const estudiantesConId = estudiantes.map((estudiante, index) => ({
  ...estudiante,
  id: index + 1
}));
console.log("Estudiantes con ID:", estudiantesConId);

const estudiantesAprobados = estudiantesConId.filter(
  estudiante => estudiante.calificacion >= 5
);
console.log("Estudiantes aprobados:", estudiantesAprobados);


estudiantesAprobados.forEach(estudiante => {
  const { nombre, calificacion } = estudiante;
  console.log(
    `¡Felicidades ${nombre}, has aprobado con ${calificacion}!`
  );
});


estudiantes.forEach(estudiante => {
  const { nombre, calificacion, aprobado } = estudiante;

  const aprobadoCorrectamente = calificacion >= 5;

  if (aprobado !== aprobadoCorrectamente) {
    console.log(
      `Incoherencia en el registro de ${nombre}: calificación = ${calificacion}, aprobado = ${aprobado}`
    );
  }
});
