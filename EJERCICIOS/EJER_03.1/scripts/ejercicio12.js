// Ejercicio 12: el enlace de Contacto refleja el número total de cursos
(() => {
    const totalCursos = document.querySelectorAll('#lista-cursos .card').length;
    const enlaces = document.querySelectorAll('.navegacion a');
    const contacto = enlaces[enlaces.length - 1];
    contacto.textContent = `Contacto (${totalCursos} Cursos)`;
})();
