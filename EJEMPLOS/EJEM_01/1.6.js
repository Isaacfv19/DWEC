
const cursos = [
  {
    nombre: "DAW",
    profesor: "Marco",
    estudiantes: [
      { nombre: "Sergio", calificacion: 0 },
      { nombre: "Jorge", calificacion: 7 },
      { nombre: "Pablo", calificacion: 9 }
    ]
  },
  {
    nombre: "DAM",
    profesor: "Carmen",
    estudiantes: [
      { nombre: "Brandon", calificacion: 6 },
      { nombre: "Kevin", calificacion: 0 },
      { nombre: "Isra", calificacion: 7 }
    ]
  },
  {
    nombre: "ASIS",
    profesor: "Elena",
    estudiantes: [
      { nombre: "Silvia", calificacion: 9 },
      { nombre: "Jessica", calificacion: 6 },
      { nombre: "Alba", calificacion: 10 }
    ]
  },

];



const resumenCursos = cursos.map(curso => {
  
  const calificaciones = curso.estudiantes.map(
    estudiante => estudiante.calificacion
  );

  
  const suma = calificaciones.reduce(
    (total, calificacion) => total + calificacion,
    0
  );


  const promedio = suma / calificaciones.length;

  return {
    nombreCurso: curso.nombre,
    promedioCalificaciones: promedio
  };
});

console.log("Resumen de cursos:", resumenCursos);



const cursosDestacados = resumenCursos.filter(
  curso => curso.promedioCalificaciones >= 7
);

console.log("Cursos destacados:", cursosDestacados);



cursosDestacados.forEach(curso => {
  console.log(
    `El curso ${curso.nombreCurso} tiene un promedio de ${curso.promedioCalificaciones.toFixed(2)} y es considerado destacado.`
  );
});



cursos.forEach(curso => {
  const hayCalificacionBaja = curso.estudiantes.some(
    estudiante => estudiante.calificacion < 4
  );

  if (hayCalificacionBaja) {
    console.log(
      `Atención: En el curso ${curso.nombre} hay estudiantes con calificaciones muy bajas.`
    );
  }
});
