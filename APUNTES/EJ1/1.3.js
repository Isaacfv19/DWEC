// Ejercicio 1.3: Combinando Objetos

const producto = { nombre: "Portátil", precio: 800 }; 
// Objeto producto (string y number)

const cliente = { nombreCliente: "Ana", esPremium: true }; 
// Objeto cliente (string y boolean)

const pedido = { ...producto, ...cliente }; 
// Spread: copia las propiedades de ambos objetos en uno nuevo

console.log(pedido); 
// Muestra el pedido con las 4 propiedades

const cliente2 = { nombre: "Luis" }; 
// Objeto con la propiedad 'nombre', que también existe en producto

const pedido2 = { ...producto, ...cliente2 }; 
// Al repetirse 'nombre', gana el valor del último objeto (cliente2)

console.log(pedido2); 
// Resultado: { nombre: "Luis", precio: 800 } (el nombre del producto se sobrescribe)