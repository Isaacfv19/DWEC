const usuario = {
  nombre: "Laura Fernández",
  email: "laura.fernandez@example.com",
};
 
const perfil = {
  puesto: "Desarrolladora Frontend",
  empresa: "TechCorp",
};
 
const empleado = { ...usuario, ...perfil };
console.log("Empleado combinado:", empleado);
 
const ciudad = empleado.perfil?.direccion?.ciudad;
console.log("Ciudad (optional chaining):", ciudad);

const ciudadFinal = ciudad ?? "Ciudad no especificada";
console.log("Ciudad final:", ciudadFinal);
 