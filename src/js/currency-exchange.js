export class currencyExchangeRate {
  static async currentRate(convertedCurrency, startingCurrency, value) {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${startingCurrency}/${convertedCurrency}/${value}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return await response.json();
    } catch (error) {
      return error;
    }
  }
}
