// Ejercicio 31: añadir ' (¡Oferta especial!)' al párrafo oculto, buscando dentro de la tarjeta de React
(() => {
    const titulos = document.querySelectorAll('.card h2');
    const tituloReact = Array.from(titulos).find((h2) => h2.textContent.includes('React'));
    const tarjetaReact = tituloReact.closest('.card');
    const parrafoOculto = tarjetaReact.querySelector('.oculto');
    parrafoOculto.textContent += ' (¡Oferta especial!)';
})();
