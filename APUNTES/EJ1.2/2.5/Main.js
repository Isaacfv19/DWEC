// main.js: usa las funciones del módulo gestorUsuarios.js

import mostrarPerfil, { crearPerfil as nuevoPerfil, obtenerMayoresDeEdad, calcularPromedioEdad } from "./gestorUsuarios.js"; // Default sin llaves; las exportaciones con nombre van entre llaves ('as' crea un alias)

// --- Parte 2: dos perfiles básicos ---
const usuarios = [ // Array con dos usuarios creados con la función importada (alias nuevoPerfil)
  nuevoPerfil("Ana", "ana@correo.com", 25),
  nuevoPerfil("Luis", "luis@correo.com", 17),
];

for (const usuario of usuarios) { // Recorre el array
  console.log(mostrarPerfil(usuario)); // Imprime el perfil formateado
}

// --- Parte 4: análisis con 5 usuarios ---
const todosLosUsuarios = [ // Array de 5 usuarios con edades variadas (mayores y menores de 18)
  nuevoPerfil("Ana", "ana@correo.com", 25),
  nuevoPerfil("Luis", "luis@correo.com", 17),
  nuevoPerfil("Marta", "marta@correo.com", 32),
  nuevoPerfil("Pablo", "pablo@correo.com", 15),
  nuevoPerfil("Sara", "sara@correo.com", 18),
];

const mayoresDeEdad = obtenerMayoresDeEdad(todosLosUsuarios); // Filtra y guarda solo los mayores de edad

console.log("Usuarios mayores de edad:"); // Encabezado
for (const usuario of mayoresDeEdad) { // Recorre los mayores de edad
  console.log(mostrarPerfil(usuario)); // Imprime el perfil de cada uno
}

const promedio = calcularPromedioEdad(todosLosUsuarios); // Calcula el promedio con el array original
console.log(`La edad promedio de los usuarios es: ${promedio}`); // Muestra el promedio