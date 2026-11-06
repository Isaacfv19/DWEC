const TEXTO_LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

document.getElementById('btn-generar').addEventListener('click', () => {
    // 2. Número de párrafos que pide el usuario
    const cantidad = parseInt(document.getElementById('cantidad').value, 10);

    // 3. Vaciar el resultado anterior
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (isNaN(cantidad) || cantidad < 1) return;

    // 6. DocumentFragment: se construyen todos los párrafos en memoria
    const fragmento = document.createDocumentFragment();

    // 4 y 5. Bucle que crea un <p> por iteración
    for (let i = 0; i < cantidad; i++) {
        const p = document.createElement('p');
        p.textContent = TEXTO_LOREM;
        fragmento.appendChild(p);
    }

    // Una única inserción en el DOM
    resultado.appendChild(fragmento);
});
