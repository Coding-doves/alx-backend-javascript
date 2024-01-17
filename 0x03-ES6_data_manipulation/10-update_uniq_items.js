export default function updateUniqueItems(inputMap) {
  if (!(inputMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  inputMap.forEach((quantity, item) => {
    inputMap.set(item, quantity === 1 ? 100 : quantity);
  });

  return inputMap;
}
