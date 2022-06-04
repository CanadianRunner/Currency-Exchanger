export class currencyExchangeRate {
  static async currentRate(convertedCurrency, startingCurrency, value) {
    try {
      console.log(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${startingCurrency}/${convertedCurrency}/${value}`);
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${startingCurrency}/${convertedCurrency}/${value}`
      ); 
      if (!response.ok) {
        throw Error(response.statusText);
      }
      console.log(response);
      return await response.json();
    } catch (error) {
      return error;
    }
  }
}
