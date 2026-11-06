// Ejercicio 32: clase 'imagen-curso' a la imagen de cada tarjeta
(() => {
    const tarjetas = document.querySelectorAll('.card');
    tarjetas.forEach((tarjeta) => {
        const imagen = tarjeta.querySelector('img');
        imagen.classList.add('imagen-curso');
    });
})();
