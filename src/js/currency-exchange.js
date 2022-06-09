export class currencyExchangeRate {
  static async currentRate(convertedCurrency, startingCurrency, value) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${startingCurrency}/${convertedCurrency}/${value}`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request);
        }
      };
      request.open("GET", url);
      request.send();
    });
  }
}
