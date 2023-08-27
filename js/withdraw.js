//step 1:add eventlistener
document.getElementById("btn-withdraw").addEventListener('click', function () {

    //step-2: getting the deposit amount
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawFieldString);
  
    //step-3: adding the withdraw amout to deposit total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // step-4:
    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
  
    // set the deposit total
  
    withdrawTotalElement.innerText = currentWithdrawTotal;
  
    // step-6:
    // calculate current balance total
  
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step-6.5: adding new deposit total with previousBalance
  
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount ;
  
    balanceTotalElement.innerText = currentBalanceTotal;
  
    // step-7: clear deposit field
    withdrawField.value = " ";
  });
  