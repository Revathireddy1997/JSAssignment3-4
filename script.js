// script.js

// Function to handle currency conversion
function convertCurrency() {
  // Get the input values
  const amountInput = document.getElementById('amount');
  const fromCurrencySelect = document.getElementById('fromCurrency');
  const toCurrencySelect = document.getElementById('toCurrency');
  const resultDisplay = document.getElementById('result');

  // Validate the input
  const amount = parseFloat(amountInput.value);
  if (isNaN(amount)) {
    alert('Please enter a valid amount.');
    return;
  }

  // Hardcoded exchange rate for simplicity
  const exchangeRateUSDToCAD = 1.25;

  // Perform the conversion
  let result;
  if (fromCurrencySelect.value === 'CAD' && toCurrencySelect.value === 'USD') {
    result = amount / exchangeRateUSDToCAD;
  } else if (fromCurrencySelect.value === 'USD' && toCurrencySelect.value === 'CAD') {
    result = amount * exchangeRateUSDToCAD;
  } else {
    // If the same currency is selected, result is the same as the input
    result = amount;
  }

  // Display the result with up to 3 digits after the decimal point
  resultDisplay.value = result.toFixed(3);
}

// Function to handle currency selection change
function selectChange(selectElement) {
  // Get the selected currency
  const selectedCurrency = selectElement.value;

  // Update the other select element to match the opposite currency
  const otherSelectElement = document.querySelector('select:not(#' + selectElement.id + ')');
  otherSelectElement.value = selectedCurrency === 'CAD' ? 'USD' : 'CAD';
}


