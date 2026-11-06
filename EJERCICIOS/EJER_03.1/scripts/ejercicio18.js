// Ejercicio 18: desde el footer, el contenedor principal justo antes (main) con borde rojo
(() => {
    const footer = document.getElementById('footer-principal');
    const principal = footer.previousElementSibling;
    principal.style.border = '2px solid red';
})();
