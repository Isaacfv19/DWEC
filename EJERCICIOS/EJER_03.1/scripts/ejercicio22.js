// Ejercicio 22: formulario funcional, sin recargar la página
(() => {
    const formulario = document.getElementById('formulario-contacto');
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const mensaje = document.getElementById('mensaje').value;
        console.log('Ej22 - Nombre:', nombre);
        console.log('Ej22 - Mensaje:', mensaje);
    });
})();
