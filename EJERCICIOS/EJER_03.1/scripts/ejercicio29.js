// Ejercicio 29: atributo data-tipo="enlace-nav" en todos los enlaces de la navegación
(() => {
    const enlaces = document.querySelectorAll('.navegacion a');
    enlaces.forEach((enlace) => {
        enlace.setAttribute('data-tipo', 'enlace-nav');
    });
})();
