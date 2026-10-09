// empleados.js: módulo para gestionar una lista de empleados

const empleados = [ // Lista inicial de empleados (id, nombre, departamento, salario)
  { id: 1, nombre: "Ana López", departamento: "Ventas", salario: 2200 },
  { id: 2, nombre: "Carlos Ruiz", departamento: "Informática", salario: 3100 },
  { id: 3, nombre: "Marta Gil", departamento: "Recursos Humanos", salario: 2500 },
];

export function agregarEmpleado(empleado) { // Añade un empleado a la lista
  empleados.push(empleado); // push lo inserta al final del array
}

export function eliminarEmpleado(id) { // Elimina un empleado por su id
  const indice = empleados.findIndex((empleado) => empleado.id === id); // Busca la posición del empleado (-1 si no existe)
  if (indice === -1) return false; // Si no existe, no se elimina nada
  empleados.splice(indice, 1); // splice elimina 1 elemento desde esa posición
  return true; // Indica que se eliminó correctamente
}

export function buscarPorDepartamento(departamento) { // Devuelve los empleados de un departamento
  return empleados.filter((empleado) => empleado.departamento === departamento); // filter conserva solo los que coinciden
}

export function calcularSalarioPromedio() { // Devuelve el salario promedio de todos los empleados
  if (empleados.length === 0) return 0; // Evita dividir entre 0 si no hay empleados
  const total = empleados.reduce((suma, empleado) => suma + empleado.salario, 0); // reduce suma todos los salarios (empieza en 0)
  return total / empleados.length; // Divide entre el número de empleados
}

export function obtenerEmpleadosOrdenadosPorSalario() { // Devuelve un array nuevo ordenado de mayor a menor salario
  return [...empleados].sort((a, b) => b.salario - a.salario); // La copia con spread evita modificar el array original; b - a ordena de mayor a menor
}
