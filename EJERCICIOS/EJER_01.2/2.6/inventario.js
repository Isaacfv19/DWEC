// Crea un objeto producto
export function crearProducto(nombre, categoria, precio, stock) {
  return { nombre, categoria, precio, stock };
}

// Devuelve los productos de una categoría
export function filtrarPorCategoria(inventario, categoria) {
  return inventario.filter((producto) => producto.categoria === categoria);
}

// Devuelve los productos con stock 0
export function listarProductosAgotados(inventario) {
  return inventario.filter((producto) => producto.stock === 0);
}

// Suma precio * stock de todos los productos
export function calcularValorTotalInventario(inventario) {
  return inventario.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );
}

// Exportación por defecto: muestra un resumen en consola
export default function resumenInventario(inventario) {
  const categoriasDistintas = new Set(inventario.map((p) => p.categoria));
  const valorTotal = calcularValorTotalInventario(inventario);

  console.log('--- Resumen del inventario ---');
  console.log(`Total de productos: ${inventario.length}`);
  console.log(`Categorías distintas: ${categoriasDistintas.size}`);
  console.log(`Valor total: ${valorTotal} €`);
}