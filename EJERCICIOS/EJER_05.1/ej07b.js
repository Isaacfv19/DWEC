// Apartado 2: la caja pasa de 0 ms a 1500 ms
console.log('1. Salgo de casa');
setTimeout(() => console.log('2. Llego al supermercado (500 ms)'), 500);
console.log('3. Cojo el carro');
setTimeout(() => console.log('4. Pago en caja (1500 ms)'), 1500);
setTimeout(() => console.log('5. Vuelvo a casa (1000 ms)'), 1000);
console.log('6. Hago la lista');
