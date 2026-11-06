// Ejercicio 21: alerta al pulsar el botón de la tarjeta premium
(() => {
    const boton = document.getElementById('btn-info-premium');
    boton.addEventListener('click', () => {
        alert('Accediendo a información exclusiva para miembros premium');
    });
})();
