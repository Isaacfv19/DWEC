// Crea un objeto usuario
export function crearPerfil(nombre, email, edad) {
  return { nombre, email, edad };
}

// Devuelve true si el usuario tiene 18 años o más
export function esMayorDeEdad(usuario) {
  return usuario.edad >= 18;
}

// Devuelve un nuevo array solo con los mayores de edad
export function obtenerMayoresDeEdad(usuarios) {
  return usuarios.filter(esMayorDeEdad);
}

// Calcula la edad promedio de un array de usuarios
export function calcularPromedioEdad(usuarios) {
  if (usuarios.length === 0) return 0;
  const sumaEdades = usuarios.reduce((acumulador, usuario) => acumulador + usuario.edad, 0);
  return sumaEdades / usuarios.length;
}

// Exportación por defecto
export default function mostrarPerfil(usuario) {
  return `Nombre: ${usuario.nombre}, Email: ${usuario.email}, Edad: ${usuario.edad}`;
}