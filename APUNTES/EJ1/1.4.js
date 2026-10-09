// Ejercicio 1.4: Arrays y sus Métodos

const ciudades = ["Madrid", "Buenos Aires", "Tokio", "Nueva York", "París"]; 
// Array con 5 ciudades (const permite modificar su contenido, no reasignarlo)

ciudades.push("Roma"); 
// push añade "Roma" al final del array

const ciudadesMayusculas = ciudades.map((ciudad) => ciudad.toUpperCase()); 
// map recorre el array y devuelve uno nuevo con cada ciudad en mayúsculas

const ciudadesFiltradas = ciudades.filter((ciudad) => ciudad.length > 6); 
// filter devuelve solo las ciudades con más de 6 caracteres

console.log(ciudades); // Array original (con Roma)
console.log(ciudadesMayusculas); // Array en mayúsculas
console.log(ciudadesFiltradas); // Resultado: ["Buenos Aires", "Nueva York"]