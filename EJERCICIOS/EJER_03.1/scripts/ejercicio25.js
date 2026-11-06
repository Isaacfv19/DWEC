// Ejercicio 25: fondo #f0f0f0 a las tarjetas de la categoría 'Desarrollo Web'
(() => {
    const tarjetas = document.querySelectorAll('.card');
    tarjetas.forEach((tarjeta) => {
        const categoria = tarjeta.querySelector('.categoria');
        if (categoria && categoria.textContent.trim() === 'Desarrollo Web') {
            tarjeta.style.backgroundColor = '#f0f0f0';
        }
    });
})();
