// Ejercicio 19: de .info subir a la tarjeta (padre) y bajar a su primer hijo (la imagen)
(() => {
    const info = document.querySelector('.info');
    const tarjeta = info.parentElement;
    const primerHijo = tarjeta.firstElementChild;
    console.log('Ej19 - Primer hijo de la tarjeta:', primerHijo);
})();
