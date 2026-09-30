function esContrasenaValida(contrasena) {
  return contrasena.length >= 8
}

const contrasenas = ['1234', 'miClave2024', 'abc']

const resultado = contrasenas.map(contrasena => contrasena.length >= 8)

console.log(resultado) // [false, true, false]