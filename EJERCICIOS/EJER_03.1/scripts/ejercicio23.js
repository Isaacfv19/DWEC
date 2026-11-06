// Ejercicio 23: al hacer clic en el título del curso de React, mostrar el párrafo oculto
(() => {
    const parrafoOculto = document.querySelector('.oculto');
    const tarjetaReact = parrafoOculto.closest('.card');
    const tituloReact = tarjetaReact.querySelector('h2');

    tituloReact.addEventListener('click', () => {
        parrafoOculto.classList.remove('oculto');
    });
})();
