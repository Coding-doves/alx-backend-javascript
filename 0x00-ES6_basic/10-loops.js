export default function appendToEachArrayValue(array, appendString) {
  let newArr = [];
  for (let value of array) {
    newArr.push(appendString + value);
  }

  return newArr;
}
