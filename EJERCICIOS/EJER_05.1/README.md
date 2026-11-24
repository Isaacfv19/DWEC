# EJER_05.1 · Respuestas

## Ejercicio 1 · Predice la salida

Salida: `Inicio`, `Dentro del try 1`, `Capturado: ReferenceError`, `Limpieza`, `Fin`.

- No llega a ejecutarse `Dentro del try 2`, porque `console.log(total)` lanza un error y el flujo salta al `catch`. `Fin` sí aparece porque el error se captura, así el programa continúa.
- Con `const total = 0;` antes del `try` sale: `Inicio`, `Dentro del try 1`, `0`, `Dentro del try 2`, `Limpieza`, `Fin`. El `finally` se ejecuta siempre, haya error o no.

## Ejercicio 4 · Ida y vuelta

- `apodo` no aparece porque `JSON.stringify` ignora las propiedades con valor `undefined`, ya que JSON no tiene ese tipo.
- `fechaAlta` vuelve como texto (`string`) porque JSON no tiene tipo fecha. `stringify` la convierte a texto ISO y `parse` no la reconvierte.

## Ejercicio 6 · La lista de la compra

Predicción y resultado: en A el original cambia (es el mismo objeto), en B cambian los productos pero no el propietario, y en C el original no cambia.

1. En B, `{ ...lista2 }` copia solo el primer nivel. El propietario es un texto, así que la copia tiene su propio valor. Los productos son un array, y la copia comparte la misma referencia con el original, por eso `push` modifica ambos.
2. Usaría la copia superficial con el operador spread, porque sin objetos ni arrays anidados es suficiente.

## Ejercicio 7 · Adivina el orden

- Orden con 0 ms: 1, 3, 6, 4, 2, 5.
- Orden con 1500 ms: 1, 3, 6, 2, 5, 4.
- El 6 sale antes que el 4 porque `setTimeout` nunca ejecuta su función al momento, ni siquiera con 0 ms. Primero termina todo el código síncrono (1, 3 y 6) y después se ejecutan los temporizadores pendientes.

## Ejercicio 8 · Comprobar el stock

Las dos líneas `Consulta enviada` salen antes porque las promesas son asíncronas. El bucle no espera a que pase 1 segundo, solo lanza las dos consultas, y los resultados llegan después, cuando se cumple el temporizador.
