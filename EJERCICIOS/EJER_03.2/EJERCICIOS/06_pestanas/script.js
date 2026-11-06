// Delegación de eventos: un solo listener en el contenedor de los botones
document.getElementById('pestanas').addEventListener('click', (evento) => {
    // Solo reaccionamos si se ha pulsado un botón
    if (evento.target.tagName !== 'BUTTON') return;

    // 3. Ocultar todos los paneles
    document.querySelectorAll('.panel').forEach((panel) => {
        panel.classList.add('oculto');
    });

    // 4. Mostrar solo el panel cuyo id coincide con el data-id del botón
    const id = evento.target.dataset.id;
    document.getElementById(id).classList.remove('oculto');
});
