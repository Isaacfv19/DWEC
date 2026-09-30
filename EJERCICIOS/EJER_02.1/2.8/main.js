
import {
  agregarEmpleado,
  eliminarEmpleado,
  buscarPorDepartamento,
  calcularSalarioPromedio,
  obtenerEmpleadosOrdenadosPorSalario,
} from "./empleados.js";

// 1. Añadir empleados nuevos
agregarEmpleado({ id: 7, nombre: "Elena Castro", departamento: "Tecnología", salario: 52000 });
agregarEmpleado({ id: 8, nombre: "Jorge Navarro", departamento: "Finanzas", salario: 39000 });

// 2. Buscar por departamento
console.log("Empleados de Tecnología:");
console.log(buscarPorDepartamento("Tecnología"));

console.log("Empleados de Finanzas:");
console.log(buscarPorDepartamento("Finanzas"));

// 3. Salario promedio
console.log(`Salario promedio: ${calcularSalarioPromedio().toFixed(2)} €`);

// 4. Eliminar un empleado
eliminarEmpleado(4);
console.log("Se ha eliminado al empleado con id 4.");

// 5. Lista ordenada por salario (de mayor a menor)
console.log("Empleados ordenados por salario:");
console.log(obtenerEmpleadosOrdenadosPorSalario());