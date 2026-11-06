// Ejercicio 6: encontrar el párrafo que tiene el atributo de datos data-precio
(() => {
    const parrafo = document.querySelector('p[data-precio]');
    console.log('Ej06 - Párrafo con data-precio:', parrafo.textContent);
    console.log('Ej06 - Precio:', parrafo.dataset.precio);
})();
