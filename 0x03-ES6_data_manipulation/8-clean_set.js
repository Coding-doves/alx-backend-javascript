export default function cleanSet(inputSet, startString) {
  if (!inputSet || !startString || !(inputSet instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const filteredValues = Array.from(inputSet)
    .filter((value) => value && value.startsWith(startString))
    .map(value => value.replace(xStartString));

  return filteredValues.join('-');
}
