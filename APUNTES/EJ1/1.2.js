// Ejercicio 1.2: Objetos y su Manipulación

const coche = { marca: "Toyota", modelo: "Corolla", año: 2020, estaDisponible: false }; // Objeto con 4 propiedades (string, string, number, boolean)

console.table(coche); 
// Muestra el objeto completo en forma de tabla

const { marca, modelo } = coche; 
// Desestructuración: extrae marca y modelo en variables separadas
console.log(marca, modelo); 
// Imprime las dos variables extraídas

coche.estaDisponible = true; 
// Cambia el valor de la propiedad existente

coche.color = "rojo"; 
// Agrega una nueva propiedad al objeto

delete coche.año; 
// Elimina la propiedad 'año'

console.table(coche); 
// Imprime de nuevo el objeto ya modificado