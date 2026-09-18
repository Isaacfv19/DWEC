
const producto = {
  nombre: "Portátil",
  precio: 899
};

const cliente = {
  nombreCliente: "Kevin",
  esPremium: true
};

const pedido = {
  ...producto,
  ...cliente
};

console.log(pedido);



const producto2 = {
  nombre: "Iphone"
};

const pedido2 = {
  ...producto2,
  ...cliente
};

console.log(pedido2);
