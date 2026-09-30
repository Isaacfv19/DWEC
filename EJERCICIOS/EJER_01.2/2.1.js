const numeros = [3, 8, 12, 5, 17, 24];
 
const dobles = numeros.map((n) => n * 2);
console.log("Números originales:", numeros);
console.log("Dobles:", dobles);
 
const pares = numeros.filter((n) => n % 2 === 0);
console.log("Pares:", pares);
 
for (const par of pares) {
  console.log("Número par:", par);
}
 