import { CurrencyExchangeRate } from './js/currency-exchange';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function submitResults(response) {
  if(response.result === 'success') {
    $('#exchange-value').text(`Your ${response.}`)
  }
}

$(document).ready(function(){

});