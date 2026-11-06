// Ejercicio 20: desde el segundo enlace del menú llegar al h1 y ponerlo naranja
(() => {
    const segundo = document.querySelector('.navegacion a:nth-child(2)');
    const nav = segundo.parentElement;
    const h1 = nav.previousElementSibling; // el h1 está justo antes del nav en el header
    h1.style.color = 'orange';
})();
