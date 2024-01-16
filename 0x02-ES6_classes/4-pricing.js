import Currency from './3-currency';

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
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw new TypeError('instance of Currency class is needed');
    }
  }

  displayFullPrice() {
    const currencyInfo = this._currency.displayFullCurrency();
    return `${this._amount} ${currencyInfo}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
