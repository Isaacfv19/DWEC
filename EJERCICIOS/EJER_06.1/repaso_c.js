// Ejercicio 1: números
const temperaturas = [12, 5, 32, 100, 28, 0, -5];

// 1. Sin argumentos ordena como texto: [-5, 0, 100, 12, 28, 32, 5]
console.log([...temperaturas].sort());

// 2. Con función de comparación, de menor a mayor
const temperaturasOrdenadas = [...temperaturas].sort((a, b) => a - b);
console.log(temperaturasOrdenadas);

// Ejercicio 2: objetos
const jugadores = [
  { nombre: "Erik", puntos: 450 },
  { nombre: "Valeria", puntos: 980 },
  { nombre: "Matias", puntos: 120 },
  { nombre: "Sandra", puntos: 750 }
];

const ranking = [...jugadores].sort((a, b) => b.puntos - a.puntos);
console.log(ranking);
console.log(jugadores); // el original no ha cambiado

// Ejercicio 3: alfabético con tildes y Ñ
const alumnos = ["Íñigo", "Álvaro", "Berenice", "Ángela", "Niño", "Ñandú"];

const listadoOficial = [...alumnos].sort((a, b) => a.localeCompare(b, "es"));
console.log(listadoOficial);
console.log(alumnos);
