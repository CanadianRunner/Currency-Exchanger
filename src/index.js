import { currencyExchangeRate } from './js/currency-exchange';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function submitResults(response) {
  if(response.result === 'success') {
    $('#exchange-value').text(`Your ${response.base_code} worth ${response.conversion_result} ${response.target_code}`);
    $('#exchange-rate').text(`The exchange rate is ${response.conversion_rate}`);
  }
  else {
    if(response instanceof Error) {
   return $('#inputted-error').text(`There was an error with this conversion: ${response.message}`);
  }
}

$(document).ready(function(){
  $('#submit').click(function(event) {
    event.preventDefault();
    let value = $('#currency-amount').val();
    let startingCurrency = $('#first-currency').val();
    let convertedCurrency = $('#second-currency').val();
    currencyExchangeRate.currentRate(convertedCurrency, startingCurrency, value)
    .then(function(response) {
      submitResults(response);
    });
  })
});