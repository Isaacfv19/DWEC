// Ejercicio 2.1 · Reserva de viaje (versión inicial)
const formulario = document.getElementById('reserva');
const total = document.getElementById('total');
const resultado = document.getElementById('resultado');
const precioPersonaNoche = 50;

const campoPersonas = formulario.elements.personas;
const campoEntrada = formulario.elements.entrada;
const campoSalida = formulario.elements.salida;

// 1. Desactivar la validación del navegador y fijar las fechas mínimas (hoy)
formulario.noValidate = true;
// 'sv-SE' da el formato AAAA-MM-DD con la fecha local (toISOString usaría UTC)
const hoy = new Date().toLocaleDateString('sv-SE');
campoEntrada.min = hoy;
campoSalida.min = hoy;

// 2. Igual que en el ejercicio 1.1
function mostrarError(campo) {
  const zonaError = document.getElementById('error-' + campo.name);
  zonaError.textContent = campo.validationMessage;
  campo.classList.toggle('con-error', !campo.validity.valid);
  return campo.validity.valid;
}

// 4. Noches = diferencia de fechas en milisegundos entre 86 400 000
function calcularNoches() {
  const noches = (new Date(campoSalida.value) - new Date(campoEntrada.value)) / 86400000;
  // Si falta alguna fecha el resultado es NaN: se trata como 0 noches
  return Number.isNaN(noches) ? 0 : Math.max(0, noches);
}

function calcularTotal() {
  const personas = Number.isNaN(campoPersonas.valueAsNumber) ? 0 : campoPersonas.valueAsNumber;
  const importe = personas * calcularNoches() * precioPersonaNoche;
  total.textContent = `Total estimado: ${importe.toFixed(2)} €`;
  return importe;
}

// 3. La salida debe ser posterior a la entrada (setCustomValidity)
function comprobarReglas() {
  campoSalida.setCustomValidity(''); // primero se quita el error personalizado anterior
  if (campoEntrada.value && campoSalida.value && calcularNoches() <= 0) {
    campoSalida.setCustomValidity('La fecha de salida debe ser posterior a la de entrada');
  }
}

// 5. focusout: valida el campo que se abandona
formulario.addEventListener('focusout', (evento) => {
  if (evento.target.matches('input')) {
    comprobarReglas();
    mostrarError(evento.target);
  }
});

// 5. input: actualiza el total y revalida los campos que ya tenían error
formulario.addEventListener('input', (evento) => {
  const campo = evento.target;
  if (!campo.matches('input')) return;

  comprobarReglas();
  calcularTotal();

  if (campo.classList.contains('con-error')) {
    mostrarError(campo);
  }
  // Si cambia la entrada y ya hay salida, también se revalida la salida
  if (campo === campoEntrada && campoSalida.value) {
    mostrarError(campoSalida);
  }
});

// 6. submit: valida todo y muestra el resumen
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  comprobarReglas();

  const campos = Array.from(formulario.elements).filter((elemento) => elemento.matches('input'));
  const camposInvalidos = campos.filter((campo) => !mostrarError(campo));

  if (camposInvalidos.length > 0) {
    resultado.textContent = '';
    camposInvalidos[0].focus();
    return;
  }

  const datos = new FormData(formulario);
  resultado.textContent = [
    'Reserva confirmada',
    `Nombre: ${datos.get('nombre')}`,
    `Personas: ${datos.get('personas')}`,
    `Entrada: ${datos.get('entrada')}`,
    `Salida: ${datos.get('salida')}`,
    `Noches: ${calcularNoches()}`,
    `Total: ${calcularTotal().toFixed(2)} €`
  ].join('\n');
});

// 7. reset: limpia errores y resultado y deja el total a cero
formulario.addEventListener('reset', () => {
  resultado.textContent = '';
  campoSalida.setCustomValidity(''); // el reset no quita el error personalizado
  Array.from(formulario.elements)
    .filter((elemento) => elemento.matches('input'))
    .forEach((campo) => {
      campo.classList.remove('con-error');
      document.getElementById('error-' + campo.name).textContent = '';
    });
  total.textContent = 'Total estimado: 0.00 €';
});
