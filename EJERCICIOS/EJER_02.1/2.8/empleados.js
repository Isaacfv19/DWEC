// empleados.js

const empleados = [
  { id: 1, nombre: "Ana García", departamento: "Tecnología", salario: 42000 },
  { id: 2, nombre: "Luis Fernández", departamento: "Ventas", salario: 31000 },
  { id: 3, nombre: "María López", departamento: "Tecnología", salario: 48000 },
  { id: 4, nombre: "Carlos Ruiz", departamento: "Recursos Humanos", salario: 35000 },
  { id: 5, nombre: "Lucía Martín", departamento: "Ventas", salario: 33000 },
  { id: 6, nombre: "Pablo Sánchez", departamento: "Finanzas", salario: 45000 },
];

export function agregarEmpleado(empleado) {
  empleados.push(empleado);
}

export function eliminarEmpleado(id) {
  const indice = empleados.findIndex((empleado) => empleado.id === id);

  if (indice !== -1) {
    empleados.splice(indice, 1);
  }
}

export function buscarPorDepartamento(departamento) {
  return empleados.filter((empleado) => empleado.departamento === departamento);
}

export function calcularSalarioPromedio() {
  if (empleados.length === 0) {
    return 0;
  }

  const total = empleados.reduce((suma, empleado) => suma + empleado.salario, 0);
  return total / empleados.length;
}

export function obtenerEmpleadosOrdenadosPorSalario() {
  return [...empleados].sort((a, b) => b.salario - a.salario);
}