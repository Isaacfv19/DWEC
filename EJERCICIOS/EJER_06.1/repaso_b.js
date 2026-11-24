const tareas = [
  { id: 1, descripcion: "Comprar suministros de oficina", completada: false },
  { id: 2, descripcion: "Revisar código del proyecto Beta", completada: true },
  { id: 3, descripcion: "Planificar reunión semanal", completada: false },
  { id: 4, descripcion: "Responder correos urgentes", completada: false }
];

// 1.1 Create
const tareasConNueva = [
  ...tareas,
  { id: 5, descripcion: "Investigar nueva librería JS", completada: false }
];
console.log(tareasConNueva);

// 2.1 Read: pendientes
const pendientes = tareas.filter((tarea) => tarea.completada === false);
console.log(pendientes);

// 2.2 Read: tarea específica
const tareaEspecifica = tareas.find((tarea) => tarea.id === 3);
console.log(tareaEspecifica);

// 3.1 Update
const tareasActualizadas = tareas.map((tarea) =>
  tarea.id === 4 ? { ...tarea, completada: true } : tarea
);
console.log(tareasActualizadas);

// 4.1 Delete
const tareasRestantes = tareas.filter((tarea) => tarea.id !== 2);
console.log(tareasRestantes);

// 5.1 CRUD encadenado
const pendientesUrgentes = tareas
  .map((tarea) => (tarea.completada ? tarea : { ...tarea, urgente: true }))
  .filter((tarea) => !tarea.completada);
console.log(pendientesUrgentes);

// Ampliación
const descripcionesUrgentes = tareas
  .map((tarea) => (tarea.completada ? tarea : { ...tarea, urgente: true }))
  .filter((tarea) => !tarea.completada)
  .map((tarea) => tarea.descripcion);
console.log(descripcionesUrgentes);

// El original no ha cambiado
console.log(tareas);
