function calcularAreaRectangulo(base, altura) {
  return base * altura;
}
 
const calcularAreaTriangulo = function (base, altura) {
  return (base * altura) / 2;
};

const calcularAreaTrianguloArrow = (base = 1, altura = 1) => (base * altura) / 2;
 
console.log("Área rectángulo (5, 4):", calcularAreaRectangulo(5, 4));
console.log("Área triángulo (6, 3):", calcularAreaTriangulo(6, 3));
console.log("Área triángulo arrow (sin argumentos, usa defaults):", calcularAreaTrianguloArrow());
console.log("Área triángulo arrow (8, 4):", calcularAreaTrianguloArrow(8, 4));
 