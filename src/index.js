import { currencyExchangeRate } from "./js/currency-exchange";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

function submitResults(response) {
  console.log(response);
  if ('status' in response){
    $("#currency-fail").text(
      `There was a problem with this currency call: ${response.status} error`
    );
  }
  if (response.result === "success") {
    $("#exchange-value").text(
      `Your ${response.base_code} worth ${response.conversion_result} ${response.target_code}`
    );
    $("#exchange-rate").text(
      `The exchange rate is ${response.conversion_rate}`
    );
    if (response.result === "error") {
      $("#api-fail").text(
        `There was a problem.  Resource not found: ${response.error_type} error`
      );
    }
  }
}

$(document).ready(function () {
  let value = $("#number-one").val();
  let startingCurrency = $("#first-currency").val();
  let convertedCurrency = $("#second-currency").val();
  currencyExchangeRate
    .currentRate(convertedCurrency, startingCurrency, value)
    .then(function (response) {
      submitResults(response);
    });
  $("#submit").click(function (event) {
    event.preventDefault();
    let value = $("#number-one").val();
    let startingCurrency = $("#first-currency").val();
    let convertedCurrency = $("#second-currency").val();
    currencyExchangeRate
      .currentRate(convertedCurrency, startingCurrency, value)
      .then(function (response) {
        submitResults(response);
      });
  });
  $("#swap-button").click(function (event) {
    event.preventDefault();
    let submitSelect = $("#first-currency").val();
    $("#first-currency").val($("#second-currency").val());
    $("#second-currency").val(submitSelect);
  });
});
