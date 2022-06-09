import { currencyExchangeRate } from "./js/currency-exchange";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

function submitResults(response) {
  if (response.result === "success") {
    $("#exchange-value").text(
      `Your ${response.base_code} worth ${response.conversion_result} ${response.target_code}`
    );
    $("#exchange-rate").text(
      `The exchange rate is ${response.conversion_rate}`
    );
    $("#api-fail").text("");
  }
}
function displayErrors(response) {
  if (response["error-type"] === "malformed-request") {
    $("#api-fail").text(
      "Sorry the API failed to return your request " + response["error-type"]
    );
  }
  if (
    response["error-type"] === "invalid-key" ||
    response["error-type"] === "inactive-account"
  ) {
    $("#api-fail").text(
      "Sorry your API Key was invalid or your account inactive " +
        response["error-type"]
    );
  }
  if (response["error-type"] === "unsupported-code") {
    $("#api-fail").text(
      "Sorry you didn't choose a valid currency. " + response["error-type"]
    );
  }
  if (response["error-type"] === "quota-reached") {
    $("#api-fail").text(
      "Sorry your API key has used up its quota: " + response["error-type"]
    );
  }
  $("#exchange-value").text("");
  $("#exchange-rate").text("");
}

$(document).ready(function () {
  $("#submit").click(function (event) {
    event.preventDefault();
    let value = $("#number-one").val();
    let startingCurrency = $("#first-currency").val();
    let convertedCurrency = $("#second-currency").val();
    let promise = currencyExchangeRate.currentRate(
      convertedCurrency,
      startingCurrency,
      value
    );
    promise.then(
      function (response) {
        submitResults(JSON.parse(response));
      },
      function (error) {
        if (error.status === 404) {
          $("#api-fail").text(
            "Please enter a valid number (positives only)! " +
              error.status +
              " API could not return a currency conversion. "
          );
          $("#exchange-value").text("");
          $("#exchange-rate").text("");
        } else {
          displayErrors(JSON.parse(error.response));
        }
      }
    );
  });
  $("#swap-button").click(function (event) {
    event.preventDefault();
    let submitSelect = $("#first-currency").val();
    $("#first-currency").val($("#second-currency").val());
    $("#second-currency").val(submitSelect);
  });
});
