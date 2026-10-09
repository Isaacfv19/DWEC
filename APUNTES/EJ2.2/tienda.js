// tienda.js: EJER_02.2 Tienda de música (solución con métodos de arrays ES6)

// ================================================================
// PARTE 1 · EL CATÁLOGO
// ================================================================

// 1.1 Convierte la matriz en un array de objetos; si no es un array devuelve []
export const crearCatalogo = (matriz) =>
  Array.isArray(matriz) // Comprueba que recibimos un array
    ? matriz.map((fila) => ({ nombre: fila[0], categoria: fila[1], precio: fila[2], stock: fila[3] })) // Cada fila pasa a ser un objeto (acceso por índice)
    : []; // Si no es un array, devuelve vacío

// 1.2 Catálogo nuevo con las novedades al final
export const ampliarCatalogo = (catalogo, matrizNovedades) =>
  catalogo.concat(crearCatalogo(matrizNovedades)); // concat devuelve un array nuevo sin tocar el original

// 1.3 Nombres en orden alfabético respetando tildes
export const nombresOrdenados = (catalogo) =>
  catalogo.map((producto) => producto.nombre).sort((a, b) => a.localeCompare(b, 'es')); // map saca los nombres; localeCompare ordena con tildes

// 1.4 Copia ordenada por precio (ascendente o descendente)
export const ordenarPorPrecio = (catalogo, descendente = false) => {
  const copia = [...catalogo].sort((a, b) => a.precio - b.precio); // La copia con spread evita modificar el original
  return descendente ? copia.reverse() : copia; // reverse da la vuelta si se pide descendente
};

// 1.5 Nombres de los tres productos más baratos
export const tresMasBaratos = (catalogo) =>
  ordenarPorPrecio(catalogo).slice(0, 3).map((producto) => producto.nombre); // slice coge los 3 primeros del orden ascendente

// ================================================================
// PARTE 2 · BÚSQUEDAS
// ================================================================

// 2.1 Producto con ese nombre (sin distinguir mayúsculas) o undefined
export const buscarProducto = (catalogo, nombre) =>
  catalogo.find((producto) => producto.nombre.toLowerCase() === nombre.toLowerCase()); // find devuelve el primero que coincide

// 2.2 true si existe un producto con ese nombre (map + includes)
export const existeProducto = (catalogo, nombre) =>
  catalogo.map((producto) => producto.nombre.toLowerCase()).includes(nombre.toLowerCase()); // Nombres en minúsculas y comprobación con includes

// 2.3 Posición del producto o -1
export const posicionProducto = (catalogo, nombre) =>
  catalogo.findIndex((producto) => producto.nombre.toLowerCase() === nombre.toLowerCase()); // findIndex devuelve -1 si no existe

// 2.4 Nombres de los productos sin stock
export const agotados = (catalogo) =>
  catalogo.filter((producto) => producto.stock === 0).map((producto) => producto.nombre); // Filtra los agotados y se queda con el nombre

// 2.5 Productos con precio entre minimo y maximo (incluidos)
export const productosEntre = (catalogo, minimo, maximo) =>
  catalogo.filter((producto) => producto.precio >= minimo && producto.precio <= maximo); // Ambos límites incluidos

// ================================================================
// PARTE 3 · CÁLCULOS
// ================================================================

// 3.1 Valor total del almacén (precio × stock)
export const valorAlmacen = (catalogo) =>
  catalogo.reduce((total, producto) => total + producto.precio * producto.stock, 0); // Acumula el valor de cada producto

// 3.2 Producto más caro (el objeto completo)
export const productoMasCaro = (catalogo) =>
  catalogo.reduce((masCaro, producto) => (producto.precio > masCaro.precio ? producto : masCaro)); // Sin valor inicial: empieza con el primer producto

// 3.3 Unidades en stock por categoría
export const unidadesPorCategoria = (catalogo) =>
  catalogo.reduce(
    (acumulado, producto) => ({
      ...acumulado, // Conserva las categorías ya contadas
      [producto.categoria]: (acumulado[producto.categoria] || 0) + producto.stock, // Suma el stock a su categoría (0 si es la primera vez)
    }),
    {}, // El acumulador empieza como objeto vacío
  );

// 3.4 true si hay al menos un producto agotado
export const hayAgotados = (catalogo) =>
  catalogo.some((producto) => producto.stock === 0); // some: basta con que uno cumpla

// 3.5 true si todos los precios son números mayores que 0
export const preciosValidos = (catalogo) =>
  catalogo.every((producto) => typeof producto.precio === 'number' && producto.precio > 0); // every: deben cumplir todos

// ================================================================
// PARTE 4 · PEDIDOS
// ================================================================

// 4.1 Convierte 'Lucía|Tocadiscos:1;Vinilo Jazz:2' en { cliente, lineas }
export const parsearPedido = (texto) => {
  const [cliente, productos] = texto.split('|'); // 1.er split: separa cliente y productos
  const lineas = productos.split(';').map((linea) => { // 2.º split: separa cada producto
    const [nombre, cantidad] = linea.split(':'); // 3.er split: separa nombre y cantidad
    return { nombre, cantidad: Number(cantidad) }; // Number convierte el texto en número
  });
  return { cliente, lineas };
};

// 4.2 true si todos los productos existen y hay stock suficiente
export const puedeServirse = (catalogo, pedido) =>
  pedido.lineas.every((linea) => {
    const producto = buscarProducto(catalogo, linea.nombre); // Busca el producto de la línea
    return producto !== undefined && producto.stock >= linea.cantidad; // Debe existir y tener stock suficiente
  });

// 4.3 Importe total del pedido
export const totalPedido = (catalogo, pedido) =>
  pedido.lineas.reduce((total, linea) => total + buscarProducto(catalogo, linea.nombre).precio * linea.cantidad, 0); // Suma precio × cantidad de cada línea

// 4.4 Catálogo nuevo con el stock descontado (el original no cambia)
export const servirPedido = (catalogo, pedido) =>
  catalogo.map((producto) => {
    const linea = pedido.lineas.find((l) => l.nombre.toLowerCase() === producto.nombre.toLowerCase()); // ¿El pedido incluye este producto?
    return linea ? { ...producto, stock: producto.stock - linea.cantidad } : { ...producto }; // Copia del objeto, con el stock restado si está en el pedido
  });

// 4.5 Ticket del pedido como un único texto
export const generarTicket = (catalogo, pedido) => {
  const lineas = pedido.lineas.map((linea) => { // Una línea de texto por producto
    const importe = buscarProducto(catalogo, linea.nombre).precio * linea.cantidad; // Importe de la línea
    return `${linea.cantidad} x ${linea.nombre} = ${importe} €`;
  });
  return [`Cliente: ${pedido.cliente}`, ...lineas, `TOTAL: ${totalPedido(catalogo, pedido)} €`].join('\n'); // Une todo con saltos de línea
};

// ================================================================
// PARTE 5 · COLA DE PEDIDOS Y CARRITO CON "DESHACER" (modifican los arrays)
// ================================================================

// 5.1 Saca y devuelve el primer pedido (FIFO)
export const atenderSiguiente = (cola) => cola.shift(); // shift quita y devuelve el primero

// 5.2 Pone el pedido el primero y devuelve la nueva longitud
export const agregarUrgente = (cola, pedido) => cola.unshift(pedido); // unshift añade al principio y devuelve la longitud

// 5.3 Añade al carrito y apunta la acción en el historial
export const agregarAlCarrito = (carrito, historial, nombre) => {
  carrito.push(nombre); // Añade al final del carrito
  historial.push({ accion: 'agregar', nombre }); // Apunta la acción
};

// 5.4 Quita la primera aparición y apunta la acción; devuelve true/false
export const quitarDelCarrito = (carrito, historial, nombre) => {
  const posicion = carrito.indexOf(nombre); // Posición de la primera aparición
  if (posicion === -1) return false; // Si no está, no toca nada
  carrito.splice(posicion, 1); // Elimina 1 elemento en esa posición
  historial.push({ accion: 'quitar', nombre, posicion }); // Guarda la posición para poder deshacer
  return true;
};

// 5.5 Revierte la última acción del historial (LIFO); devuelve true/false
export const deshacer = (carrito, historial) => {
  if (historial.length === 0) return false; // Historial vacío: nada que deshacer
  const ultima = historial.pop(); // pop saca la última acción
  if (ultima.accion === 'agregar') {
    carrito.splice(carrito.lastIndexOf(ultima.nombre), 1); // Quita la última aparición de ese nombre
  } else {
    carrito.splice(ultima.posicion, 0, ultima.nombre); // Lo vuelve a insertar en su posición original (0 = no borra nada)
  }
  return true;
};

// ================================================================
// PARTE 6 · INFORME FINAL
// ================================================================

// 6.1 Atiende toda la cola; devuelve { catalogo, servidos, rechazados }
export const procesarCola = (catalogo, cola) => {
  let catalogoActual = catalogo; // Catálogo que se va actualizando pedido a pedido
  const servidos = [];
  const rechazados = [];
  while (cola.length > 0) { // Mientras queden pedidos en la cola
    const pedido = atenderSiguiente(cola); // Saca el siguiente
    if (puedeServirse(catalogoActual, pedido)) {
      catalogoActual = servirPedido(catalogoActual, pedido); // Descuenta el stock
      servidos.push(pedido);
    } else {
      rechazados.push(pedido); // Sin stock suficiente
    }
  }
  return { catalogo: catalogoActual, servidos, rechazados };
};

// 6.2 Nombres de los productos vendidos, sin repetidos y ordenados
export const productosVendidos = (pedidos) =>
  pedidos
    .map((pedido) => pedido.lineas.map((linea) => linea.nombre)) // Array de arrays de nombres
    .flat() // Lo aplana en un único array
    .filter((nombre, indice, nombres) => nombres.indexOf(nombre) === indice) // Se queda solo con la primera aparición de cada nombre
    .sort((a, b) => a.localeCompare(b, 'es')); // Orden alfabético

// 6.3 Una barra por producto: 'Altavoz: ■■■ (3)'
export const graficoStock = (catalogo) =>
  catalogo.map((producto) => `${producto.nombre}: ${new Array(producto.stock).fill('■').join('')} (${producto.stock})`); // Array de n cuadrados unidos en un texto
