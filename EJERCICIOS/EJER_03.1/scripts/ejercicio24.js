// Ejercicio 24: añadir el prefijo "[CURSO] " a los h2 de las tarjetas
(() => {
    const titulos = document.querySelectorAll('.card h2');
    titulos.forEach((titulo) => {
        titulo.textContent = '[CURSO] ' + titulo.textContent;
    });
})();
