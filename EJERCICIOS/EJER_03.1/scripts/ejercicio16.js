// Ejercicio 16: desde el botón premium, subir hasta el div con clase 'info'
(() => {
    const boton = document.getElementById('btn-info-premium');
    const info = boton.closest('.info');
    console.log('Ej16 - Contenedor .info:', info);
})();
