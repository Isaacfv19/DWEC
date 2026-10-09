// tienda.js: usa las funciones del módulo inventario.js

import resumenInventario, { crearProducto, filtrarPorCategoria, listarProductosAgotados, calcularValorTotalInventario } from "./inventario.js"; // Default sin llaves; el resto entre llaves

const inventario = []; // Array vacío que iremos rellenando

inventario.push(crearProducto("Portátil", "Electrónica", 800, 5)); // push añade cada producto creado al inventario
inventario.push(crearProducto("Auriculares", "Electrónica", 50, 0)); // stock 0: producto agotado
inventario.push(crearProducto("Camiseta", "Ropa", 15, 40));
inventario.push(crearProducto("Pantalón", "Ropa", 30, 0)); // stock 0: producto agotado
inventario.push(crearProducto("Novela", "Libros", 12, 25));
inventario.push(crearProducto("Diccionario", "Libros", 20, 10));

console.log("Productos de Ropa:"); // Encabezado
console.log(filtrarPorCategoria(inventario, "Ropa")); // 1. Muestra los productos de la categoría "Ropa"

console.log("Productos agotados:"); // Encabezado
console.log(listarProductosAgotados(inventario)); // 2. Muestra los productos con stock 0

console.log(`Valor total del inventario: ${calcularValorTotalInventario(inventario)} €`); // 3. Muestra el valor total

resumenInventario(inventario); // 4. Ejecuta el resumen completo
