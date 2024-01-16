export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](opt) {
    if (opt === 'number') {
      return this._size;
    }
    if (opt === 'string') {
      return this._location;
    }
    return null;
  }
}
