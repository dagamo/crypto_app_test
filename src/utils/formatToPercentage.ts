export const formatToPercentage = (value: string) => {
  const numberValue = parseFloat(value);
  return numberValue > 0 ? `+${numberValue}%` : `${numberValue}%`;
};
