//step 1:add eventlistener
document
  .getElementById("btn-deposit")
  .addEventListener("click", function () {

    //step-2: getting the deposit amount
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    
    //step-3: adding the deposit amout to deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;
  });
