import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice() {
    const currencyInfo = this._currency.displayFullCurrency();
    return `${this._amount} ${currencyInfo}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
