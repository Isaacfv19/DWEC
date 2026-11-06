// Ejercicio 28: array con el texto de cada párrafo de categoría
(() => {
    const categorias = Array.from(document.querySelectorAll('.categoria'))
        .map((parrafo) => parrafo.textContent.trim());
    console.log('Ej28 - Categorías:', categorias);
})();
