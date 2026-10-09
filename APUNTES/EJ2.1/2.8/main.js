// main.js: simula la gestión de empleados de una empresa

import { agregarEmpleado, eliminarEmpleado, buscarPorDepartamento, calcularSalarioPromedio, obtenerEmpleadosOrdenadosPorSalario } from "./empleados.js"; // Importa todas las funciones del módulo

agregarEmpleado({ id: 4, nombre: "Luis Pérez", departamento: "Informática", salario: 2800 }); // Añade varios empleados nuevos
agregarEmpleado({ id: 5, nombre: "Sara Díaz", departamento: "Ventas", salario: 2400 });
agregarEmpleado({ id: 6, nombre: "Pablo Mora", departamento: "Recursos Humanos", salario: 2300 });
agregarEmpleado({ id: 7, nombre: "Elena Vega", departamento: "Informática", salario: 3500 });

console.log("Empleados del departamento de Informática:"); // Encabezado
console.table(buscarPorDepartamento("Informática")); // Busca y muestra los empleados de Informática

eliminarEmpleado(6); // Elimina al empleado con id 6 (Pablo Mora)
console.log("Se eliminó al empleado con id 6"); // Confirma la baja

console.log(`Salario promedio: ${calcularSalarioPromedio().toFixed(2)} €`); // toFixed(2) limita a 2 decimales

console.log("Empleados ordenados por salario (de mayor a menor):"); // Encabezado
console.table(obtenerEmpleadosOrdenadosPorSalario()); // Muestra la lista ordenada
