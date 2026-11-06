function generarInformeDeValidacion() {
    // a. Seleccionar los inputs y obtener su valor
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    // b. Vaciar por completo el informe anterior
    const informe = document.getElementById('informe-errores');
    informe.innerHTML = '';

    // c. Comprobar las condiciones
    const nombreValido = nombre.length > 3;
    const emailValido = email.includes('@');

    // d. Un <p> por cada condición que no se cumpla
    if (!nombreValido) {
        const error = document.createElement('p');
        error.textContent = 'El nombre es incorrecto (debe tener más de 3 caracteres)';
        informe.appendChild(error);
    }

    if (!emailValido) {
        const error = document.createElement('p');
        error.textContent = 'El email es incorrecto (debe contener @)';
        informe.appendChild(error);
    }

    // e. Si todo es correcto, un único <p> de confirmación
    if (nombreValido && emailValido) {
        const ok = document.createElement('p');
        ok.classList.add('valido');
        ok.textContent = 'Formulario válido';
        informe.appendChild(ok);
    }
}

document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();
    generarInformeDeValidacion();
});
