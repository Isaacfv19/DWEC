const productos = document.getElementById('productos');
const carrito = document.getElementById('carrito');
const total = document.getElementById('total');

// 2. Recorre los <li> del carrito, suma sus data-price y actualiza el total
function calcularTotal() {
    let suma = 0;
    carrito.querySelectorAll('li').forEach((li) => {
        suma += parseFloat(li.dataset.price);
    });
    total.textContent = suma.toFixed(2);
}

// 1. Al pulsar "Añadir al carrito", clonar el <li> y añadirlo al carrito
productos.addEventListener('click', (evento) => {
    if (evento.target.tagName !== 'BUTTON') return;

    const li = evento.target.closest('li');
    const clon = li.cloneNode(true);

    // (Extra) En el carrito el botón pasa a ser "Quitar"
    const boton = clon.querySelector('button');
    boton.textContent = 'Quitar';
    boton.classList.add('quitar');

    carrito.appendChild(clon);
    calcularTotal(); // 3
});

// (Extra) Quitar productos del carrito y recalcular el total
carrito.addEventListener('click', (evento) => {
    if (evento.target.classList.contains('quitar')) {
        evento.target.closest('li').remove();
        calcularTotal();
    }
});
