export class currencyExchangeRate {
  static async currentRate(convertedCurrency, startingCurrency, value) {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${startingCurrency}/${convertedCurrency}/${value}`
      );
      if (!response.ok) {
        console.log(response);
        return await response;
      }
      return await response.json();
    } catch (error) {
      return error;
    }
  }
}

// export class currencyExchangeRate {
//   static async currentRate(convertedCurrency, startingCurrency, value) {
//     try {
//       const response = await fetch(
//         `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${startingCurrency}/${convertedCurrency}/${value}`
//       );
//       let currencyResponse;

//       if (response.ok && response.status == 200) {
//         currencyResponse = await response.json();
//         return currencyResponse;
//       }
//       return await currencyResponse;
//     } catch (error) {
//       return error;
//     }
//   }
// }

