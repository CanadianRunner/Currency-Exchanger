export default class CurrencyExchangeRate {
  static currentRate(convertedCurrency, startingCurrency, value) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair${startingCurrency}/${convertedCurrency}/${value}`)
    .then(function(response) {
      
    })
  }
}