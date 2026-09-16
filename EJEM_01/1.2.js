
const coche = {
  marca: "Toyota",
  modelo: "Corola",
  año: 2024,
  estaDisponible: false
};

console.table(coche);

const { marca, modelo } = coche;

console.log("Marca:", marca);
console.log("Modelo:", modelo);

coche.estaDisponible = true;
coche.color = "rojo";
delete coche.año;

console.table(coche);
