// Oculta todas las respuestas (les asegura la clase 'oculto')
function ocultarTodasLasRespuestas() {
    const respuestas = document.querySelectorAll('.faq p');
    respuestas.forEach((respuesta) => {
        respuesta.classList.add('oculto');
    });
}

// Recibe un <h2> y muestra su respuesta (el hermano siguiente), ocultando antes las demás
function revelarRespuesta(pregunta) {
    ocultarTodasLasRespuestas();
    const respuesta = pregunta.nextElementSibling;
    respuesta.classList.remove('oculto');
}

document.querySelectorAll('.faq h2').forEach((pregunta) => {
    pregunta.addEventListener('click', () => revelarRespuesta(pregunta));
});
