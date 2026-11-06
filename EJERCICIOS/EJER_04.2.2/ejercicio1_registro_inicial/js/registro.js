// Ejercicio 1.1 · Registro de usuario (versión inicial)
const formulario = document.getElementById('registro');
const resultado = document.getElementById('resultado');

// 1. Desactivar la validación del navegador (los mensajes los mostramos nosotros)
formulario.noValidate = true;

// 2. Escribe el mensaje de error del campo, marca o desmarca el campo
//    y devuelve true si es válido
function mostrarError(campo) {
  const zonaError = document.getElementById('error-' + campo.name);
  zonaError.textContent = campo.validationMessage;
  campo.classList.toggle('con-error', !campo.validity.valid);
  return campo.validity.valid;
}

// Todos los campos del formulario (sin los botones)
function obtenerCampos() {
  return Array.from(formulario.elements).filter((elemento) => elemento.matches('input'));
}

// 3. focusout (burbujea, a diferencia de blur): valida el campo que se abandona
formulario.addEventListener('focusout', (evento) => {
  if (evento.target.matches('input')) {
    mostrarError(evento.target);
  }
});

// 4. input: si el campo ya tenía error, se revalida mientras el usuario corrige
formulario.addEventListener('input', (evento) => {
  const campo = evento.target;
  if (campo.matches('input') && campo.classList.contains('con-error')) {
    mostrarError(campo);
  }
});

// 5. submit: cancela el envío y valida todos los campos
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  // mostrarError devuelve true si es válido, así que nos quedamos con los que devuelven false
  const camposInvalidos = obtenerCampos().filter((campo) => !mostrarError(campo));

  if (camposInvalidos.length > 0) {
    resultado.textContent = '';
    camposInvalidos[0].focus();
    return;
  }

  const datos = Object.fromEntries(new FormData(formulario));
  delete datos.clave; // la contraseña no se muestra
  resultado.textContent = JSON.stringify(datos, null, 2);
});

// 6. reset: limpia el resultado, las clases y los mensajes de error
formulario.addEventListener('reset', () => {
  resultado.textContent = '';
  obtenerCampos().forEach((campo) => {
    campo.classList.remove('con-error');
    document.getElementById('error-' + campo.name).textContent = '';
  });
});
