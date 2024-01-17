function updateUniqueItems(inputMap) {
  if (!(inputMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedMap = new Map();

  inputMap.forEach((quantity, item) => {
    updatedMap.set(item, quantity === 1 ? 100 : quantity);
  });

  return updatedMap;
}
