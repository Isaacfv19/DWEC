// Ejercicio 27: borde punteado de 2px negro a las tarjetas que NO son premium
(() => {
    const tarjetas = Array.from(document.querySelectorAll('.card'));
    const estandar = tarjetas.filter((tarjeta) => !tarjeta.classList.contains('premium'));
    estandar.forEach((tarjeta) => {
        tarjeta.style.border = '2px dotted black';
    });
})();
