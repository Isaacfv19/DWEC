document.getElementById('btn-ordenar').addEventListener('click', () => {
    const lista = document.getElementById('lista');

    // 2 y 3. Seleccionar los <li> y convertir la NodeList en Array
    const elementos = Array.from(lista.querySelectorAll('li'));

    // 4. Ordenar alfabéticamente por textContent (localeCompare respeta tildes y la ñ)
    elementos.sort((a, b) => a.textContent.localeCompare(b.textContent, 'es'));

    // 5. Vaciar la lista original
    lista.innerHTML = '';

    // 6. Volver a añadir los elementos ya ordenados
    elementos.forEach((li) => lista.appendChild(li));
});
