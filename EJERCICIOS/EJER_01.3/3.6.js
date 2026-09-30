const maximo = (...numeros) => {
  let mayor = numeros[0]
  for (const n of numeros) {
    if (n > mayor) {
      mayor = n
    }
  }
  return mayor
}

const notas = [7, 9, 5, 10, 6]

console.log(maximo(...notas)) // 10