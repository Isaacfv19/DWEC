import mostrarPerfil, {
  crearPerfil as nuevoUsuario, // alias
  obtenerMayoresDeEdad,
  calcularPromedioEdad,
} from './gestorUsuarios.js';

// Array con 5 usuarios de distintas edades
const usuarios = [
  nuevoUsuario('Ana', 'ana@email.com', 25),
  nuevoUsuario('Luis', 'luis@email.com', 17),
  nuevoUsuario('Marta', 'marta@email.com', 32),
  nuevoUsuario('Pablo', 'pablo@email.com', 15),
  nuevoUsuario('Lucía', 'lucia@email.com', 18),
];

// 1. Filtrar mayores de edad
const mayoresDeEdad = obtenerMayoresDeEdad(usuarios);

// 2. Mostrar encabezado y perfiles
console.log('Usuarios mayores de edad:');
mayoresDeEdad.forEach((usuario) => {
  console.log(mostrarPerfil(usuario));
});

// 3. Edad promedio del array original
const promedio = calcularPromedioEdad(usuarios);
console.log(`La edad promedio de los usuarios es: ${promedio}`);