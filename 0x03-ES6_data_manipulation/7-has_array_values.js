export default function hasValuesFromArray(sets, arrs) {
  return arrs.every((i) => sets.has(i));
}
