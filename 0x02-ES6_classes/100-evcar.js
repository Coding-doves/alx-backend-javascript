import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Getter and Setter for range
  get range() {
    return this._range;
  }

  set range(range) {
    this._range = range;
  }

  cloneCar() {
    // Returning an instance of Car instead of EVCar
    return new Car(this._brand, this._motor, this._color);
  }
}
