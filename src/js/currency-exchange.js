export default class CurrencyExchangeRate {
  static currentRate(convertedCurrency, startingCurrency, value) {
    return fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair${startingCurrency}/${convertedCurrency}/${value}`
    ).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function)
  }
}
