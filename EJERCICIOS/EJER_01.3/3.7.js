const dividir = (a, b) => {
  if (b === 0) {
    throw new Error('No se puede dividir entre cero')
  }
  return a / b
}

try {
  console.log(dividir(10, 0))
} catch (e) {
  console.log('Error:', e.message)
} finally {
  console.log('Operación finalizada')
}