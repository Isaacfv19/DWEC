// Ejercicio 2.3: Condicionales y Operadores Lógicos

function retirarDinero(saldo, retirar, tieneTarjetaCredito = false) { // Recibe saldo, cantidad a retirar y (extra) si tiene tarjeta; por defecto false
  if (saldo >= retirar) { // Comprueba si el saldo cubre la cantidad
    const nuevoSaldo = saldo - retirar; // Calcula el saldo restante
    console.log(`Retiro exitoso. Saldo restante: ${nuevoSaldo}`); // Mensaje de éxito
  } else if (saldo < retirar && tieneTarjetaCredito) { // Saldo insuficiente Y con tarjeta (operador lógico &&)
    console.log("Saldo insuficiente, pagando con tarjeta de crédito"); // Se paga con tarjeta
  } else { // Saldo insuficiente y sin tarjeta
    console.log("Saldo insuficiente"); // Mensaje de error
  }
}

retirarDinero(100, 40); // Saldo suficiente: Retiro exitoso. Saldo restante: 60
retirarDinero(30, 50); // Insuficiente y sin tarjeta: Saldo insuficiente
retirarDinero(30, 50, true); // Insuficiente pero con tarjeta: pagando con tarjeta de crédito