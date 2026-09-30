function retirarDinero(saldo, retirar, tieneTarjetaCredito = false) {
  if (saldo >= retirar) {
    const nuevoSaldo = saldo - retirar;
    console.log(`Retiro exitoso. Saldo restante: ${nuevoSaldo}`);
  } else if (tieneTarjetaCredito) {
    console.log("Saldo insuficiente, pagando con tarjeta de crédito");
  } else {
    console.log("Saldo insuficiente");
  }
}
 
retirarDinero(100, 50);                    // Retiro exitoso
retirarDinero(100, 150);                   // Saldo insuficiente
retirarDinero(100, 150, true);             // Saldo insuficiente, pagando con tarjeta de crédito
 