export function formatCurrencyUSD(value: string) {
  const numberValue = parseFloat(value); // Convertir a número si es un string
  if (isNaN(numberValue)) {
    throw new Error('El valor debe ser un número válido');
  }

  return numberValue.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}
