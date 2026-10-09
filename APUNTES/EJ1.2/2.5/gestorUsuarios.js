// gestorUsuarios.js: módulo con las funciones para gestionar usuarios

export function crearPerfil(nombre, email, edad) { // Exportación con nombre: crea y devuelve un objeto usuario
  return { nombre, email, edad }; // Shorthand: la clave y la variable se llaman igual
}

export function esMayorDeEdad(usuario) { // Recibe un usuario y comprueba su edad
  return usuario.edad >= 18; // true si tiene 18 o más, false si no
}

export function obtenerMayoresDeEdad(usuarios) { // Recibe un array de usuarios
  return usuarios.filter(esMayorDeEdad); // filter usa esMayorDeEdad como condición y devuelve un array nuevo solo con los mayores
}

export function calcularPromedioEdad(usuarios) { // Recibe un array de usuarios
  const sumaEdades = usuarios.reduce((suma, usuario) => suma + usuario.edad, 0); // reduce acumula la suma de todas las edades (empieza en 0)
  return sumaEdades / usuarios.length; // Divide entre el número de usuarios para obtener el promedio
}

function mostrarPerfil(usuario) { // Recibe un usuario y devuelve un string con formato
  return `Nombre: ${usuario.nombre}, Email: ${usuario.email}, Edad: ${usuario.edad}`; // Template string con los datos
}

export default mostrarPerfil; // Exportación por defecto (al importarla se puede usar cualquier nombre y sin llaves)
