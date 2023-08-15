//step-1: add eventListener to the deposit button
document.getElementById('btnDeposit').addEventListener('click', function () {
  //step-2: get the deposit amount from deposit input field
  //for input field use .value to the input field
  const depositField = document.getElementById('depositField');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  //step-3: get the current deposit total
  //for non-input use innerText to get ot set the data. Warning 😡😡 don't use .value
  const depositTotalElement = document.getElementById('depositTotal');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositAmount = parseFloat(previousDepositTotalString);

  //step-4: add numbers to set the total deposit
  const currentDepositTotal = previousDepositAmount + newDepositAmount;
  //set the deposit total
  depositTotalElement.innerText = currentDepositTotal;

  //step-5: get balance total
  const balanceTotalElement = document.getElementById('balanceTotal');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //step-6: calculate curent total balance
  const currentBalancetotal = previousBalanceTotal + newDepositAmount;
  //set the balance total
  balanceTotalElement.innerText = currentBalancetotal;

  //step-7: clear the deposit field
  depositField.value = '';
})