// Ejercicio 2.1: Arrays y Métodos

const numeros = [1, 2, 3, 4, 5, 6, 7, 8]; // Array con 8 números

const dobles = numeros.map((n) => n * 2); // map devuelve un array nuevo con el doble de cada número

const pares = numeros.filter((n) => n % 2 === 0); // filter conserva solo los números cuyo resto al dividir entre 2 es 0

for (const par of pares) { // for...of recorre cada valor del array 'pares'
  console.log(par); // Imprime el número par en consola
}

console.log(dobles); // Muestra el array de dobles para comprobarlo
