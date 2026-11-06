// Ejercicio 30: buscar el textarea dentro de la sección del formulario y cambiar su placeholder
(() => {
    const seccion = document.getElementById('formulario-seccion');
    const area = seccion.querySelector('textarea');
    area.placeholder = 'Escribe aquí tu consulta detallada';
})();
