export function crearPerfil(nombre, email, edad) {
  return { nombre, email, edad };
}
 
export function esMayorDeEdad(usuario) {
  return usuario.edad >= 18;
}
 
export function obtenerMayoresDeEdad(usuarios) {
  return usuarios.filter(esMayorDeEdad);
}

export function calcularPromedioEdad(usuarios) {
  if (usuarios.length === 0) return 0;
  const sumaEdades = usuarios.reduce((acumulador, usuario) => acumulador + usuario.edad, 0);
  return sumaEdades / usuarios.length;
}

function mostrarPerfil(usuario) {
  return `Nombre: ${usuario.nombre}, Email: ${usuario.email}, Edad: ${usuario.edad}`;
}
 
export default mostrarPerfil;
 
