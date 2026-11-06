// Ejercicio 15: desde la primera tarjeta, trabajar con su hermana siguiente
(() => {
    const primera = document.querySelector('.card');
    const vecina = primera.nextElementSibling;
    console.log('Ej15 - Tarjeta vecina:', vecina);
    // Trabajamos sobre ella: mostramos su título
    console.log('Ej15 - Título de la vecina:', vecina.querySelector('h2').textContent);
})();
