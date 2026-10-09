// inventario.js: módulo con las funciones para gestionar el inventario

export function crearProducto(nombre, categoria, precio, stock) { // Crea y devuelve un objeto producto
  return { nombre, categoria, precio, stock }; // Shorthand: la clave y la variable se llaman igual
}

export function filtrarPorCategoria(inventario, categoria) { // Recibe el inventario y una categoría
  return inventario.filter((producto) => producto.categoria === categoria); // Devuelve solo los productos de esa categoría
}

export function listarProductosAgotados(inventario) { // Recibe el inventario
  return inventario.filter((producto) => producto.stock === 0); // Devuelve solo los productos sin stock
}

export function calcularValorTotalInventario(inventario) { // Recibe el inventario
  return inventario.reduce((total, producto) => total + producto.precio * producto.stock, 0); // Suma precio * stock de cada producto (empieza en 0)
}

function resumenInventario(inventario) { // Muestra un resumen del inventario en consola
  const categoriasDistintas = new Set(inventario.map((producto) => producto.categoria)); // Set elimina duplicados: queda una sola vez cada categoría
  console.log("--- Resumen del inventario ---"); // Encabezado
  console.log(`Número total de productos: ${inventario.length}`); // Cantidad de productos
  console.log(`Número de categorías distintas: ${categoriasDistintas.size}`); // Tamaño del Set = categorías distintas
  console.log(`Valor total del inventario: ${calcularValorTotalInventario(inventario)} €`); // Reutiliza la función de valor total
}

export default resumenInventario; // Exportación por defecto (se importa sin llaves)
