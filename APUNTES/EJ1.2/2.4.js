// Ejercicio 2.4: Combinación de Objetos y Optional Chaining

const usuario = { nombre: "Ana", email: "ana@correo.com" }; // Objeto usuario

const perfil = { puesto: "Desarrolladora", empresa: "TechCorp" }; // Objeto perfil

const empleado = { ...usuario, ...perfil }; // Spread: junta las propiedades de ambos objetos en uno nuevo (quedan al mismo nivel)

// empleado.perfil.direccion.ciudad daría error (TypeError) porque empleado.perfil no existe
const ciudad = empleado.perfil?.direccion?.ciudad; // Optional chaining: si algún paso es null/undefined, devuelve undefined en vez de error

const ciudadFinal = ciudad ?? "Ciudad no especificada"; // Nullish coalescing: usa el valor por defecto si 'ciudad' es null o undefined

console.log(empleado); // Muestra el empleado combinado
console.log(ciudad); // undefined (la propiedad no existe)
console.log(ciudadFinal); // "Ciudad no especificada"

// Prueba con un objeto que SÍ tiene la propiedad anidada
const empleado2 = { ...usuario, perfil: { ...perfil, direccion: { ciudad: "Oviedo" } } }; // Perfil anidado con dirección
console.log(empleado2.perfil?.direccion?.ciudad ?? "Ciudad no especificada"); // "Oviedo" (existe, no se usa el valor por defecto)