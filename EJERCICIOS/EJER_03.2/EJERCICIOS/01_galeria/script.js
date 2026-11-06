// Cambia la imagen principal por la de la miniatura que está en la posición indicada
function cambiarImagenPrincipal(indice) {
    const miniaturas = document.querySelectorAll('.miniatura'); // NodeList
    const miniatura = miniaturas[indice];
    const src = miniatura.getAttribute('src');
    const principal = document.getElementById('imagen-principal');
    principal.setAttribute('src', src);
}

// (Extra) Añade la clase 'activa' a la miniatura indicada y se la quita a las demás
function resaltarMiniatura(indice) {
    const miniaturas = document.querySelectorAll('.miniatura');
    miniaturas.forEach((miniatura, i) => {
        if (i === indice) {
            miniatura.classList.add('activa');
        } else {
            miniatura.classList.remove('activa');
        }
    });
}

// Conectamos cada miniatura con las funciones
document.querySelectorAll('.miniatura').forEach((miniatura, i) => {
    miniatura.addEventListener('click', () => {
        cambiarImagenPrincipal(i);
        resaltarMiniatura(i);
    });
});

// Estado inicial: primera miniatura resaltada
resaltarMiniatura(0);
