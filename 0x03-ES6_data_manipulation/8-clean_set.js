function cleanSet(inputSet, startString) {
  const filteredValues = Array.from(inputSet)
    .filter(value => value.startsWith(startString))
    .map(value => value.slice(startString.length));

  return filteredValues.join('-');
}
