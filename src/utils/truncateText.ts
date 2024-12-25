export function truncateText(text: string, maxLength: number) {
  if (typeof text !== 'string') {
    throw new Error('El primer argumento debe ser un string');
  }
  if (typeof maxLength !== 'number' || maxLength < 0) {
    throw new Error('El segundo argumento debe ser un número positivo');
  }
  return text.length > maxLength ? text.substring(0, maxLength) + '' : text;
}
