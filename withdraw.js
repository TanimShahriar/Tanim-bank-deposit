document.getElementById('btnWithdraw').addEventListener('click', function () {
  const withdrawField = document.getElementById('withdrawField');
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  withdrawField.value = '';

  const withdrawTotalElement = document.getElementById('withdrawTotal');
  const previousWithdrawAmountString = withdrawTotalElement.innerText;
  const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

  const newWithdrawtotal = previousWithdrawAmount + newWithdrawAmount;
  withdrawTotalElement.innerText = newWithdrawtotal;

  const balanceTotalElement = document.getElementById('balanceTotal');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
})