//step 1:add eventlistener
document.getElementById("btn-deposit").addEventListener('click', function () {

  //step-2: getting the deposit amount
  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  //step-3: adding the deposit amout to deposit total
  const depositTotalElement = document.getElementById('deposit-total');
  const previousTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousTotalString);
  // step-4:
  const currentDepositTotal = newDepositAmount + previousDepositTotal;

  // set the deposit total

  depositTotalElement.innerText = currentDepositTotal;

  // step-6:
  // calculate current balance total

  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  // step-6.5: adding new deposit total with previousBalance

  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

  balanceTotalElement.innerText = currentBalanceTotal

  // step-7: clear deposit field
  depositField.value = " ";
});
