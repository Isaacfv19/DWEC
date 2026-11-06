// Ejercicio 26: añadir dinámicamente un párrafo de duración a cada curso
(() => {
    const secciones = document.querySelectorAll('.card .info');
    secciones.forEach((info) => {
        const parrafo = document.createElement('p');
        parrafo.classList.add('duracion');
        parrafo.textContent = 'Duración: 20 horas';
        info.appendChild(parrafo);
    });
})();
