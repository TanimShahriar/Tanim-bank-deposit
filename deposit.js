//step-1: add eventListener to the deposit button
document.getElementById('btnDeposit').addEventListener('click', function () {
  //step-2: get the deposit amount from deposit input field
  //for input field use .value to the input field
  const depositField = document.getElementById('depositField');
  const depositAmount = depositField.value;

  //step-3: get the current deposit total
  //for non-input use innerText to get ot set the data. Warning 😡😡 don't use .value
  const depositTotalElement = document.getElementById('depositTotal');
  const depositTotal = depositTotalElement.innerText;
  depositTotalElement.innerText = depositAmount;

  //step-7: clear the deposit field
  depositField.value = '';
})