// Ejercicio 2.2: Funciones

function calcularAreaRectangulo(base, altura) { // Function Declaration: se declara con 'function' y se puede usar antes de definirla (hoisting)
  return base * altura; // Devuelve el área del rectángulo
}

const calcularAreaTriangulo = function (base, altura) { // Function Expression: función anónima guardada en una constante
  return (base * altura) / 2; // Devuelve el área del triángulo
};

const calcularAreaTrianguloFlecha = (base, altura) => (base * altura) / 2; // Arrow Function: sintaxis corta, con return implícito al no usar llaves

const calcularAreaConDefecto = (base = 1, altura = 1) => (base * altura) / 2; // Valores por defecto: se usan si no se pasan argumentos

console.log(calcularAreaRectangulo(5, 3)); // Resultado: 15
console.log(calcularAreaTriangulo(5, 3)); // Resultado: 7.5
console.log(calcularAreaTrianguloFlecha(5, 3)); // Resultado: 7.5
console.log(calcularAreaConDefecto(4)); // altura toma el valor por defecto (1): resultado 2
console.log(calcularAreaConDefecto()); // Ambos toman el valor por defecto: resultado 0.5