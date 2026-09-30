import resumenInventario, {
  crearProducto,
  filtrarPorCategoria,
  listarProductosAgotados,
  calcularValorTotalInventario,
} from './inventario.js';

const inventario = [];

inventario.push(crearProducto('Portátil', 'Electrónica', 750, 5));
inventario.push(crearProducto('Auriculares', 'Electrónica', 45, 12));
inventario.push(crearProducto('Camiseta', 'Ropa', 15, 30));
inventario.push(crearProducto('Pantalón vaquero', 'Ropa', 40, 0));
inventario.push(crearProducto('Sudadera', 'Ropa', 30, 8));
inventario.push(crearProducto('Novela', 'Libros', 12, 25));
inventario.push(crearProducto('Libro de cocina', 'Libros', 20, 0));

// 1. Productos de la categoría "Ropa"
console.log('Productos de Ropa:');
console.log(filtrarPorCategoria(inventario, 'Ropa'));

// 2. Productos agotados
console.log('Productos agotados:');
console.log(listarProductosAgotados(inventario));

// 3. Valor total del inventario
console.log(`Valor total del inventario: ${calcularValorTotalInventario(inventario)} €`);

// 4. Resumen completo
resumenInventario(inventario);