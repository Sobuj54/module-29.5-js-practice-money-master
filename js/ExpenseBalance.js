document.getElementById("btn-calculate").addEventListener("click", function () {
  // getting food expense
  const foodExpenseAmount = getElementValueById("food-expense");

  // getting rent expense
  const rentExpenseAmount = getElementValueById("rent-expense");

  // getting clothing expense
  const clothingExpenseAmount = getElementValueById("cloth-expense");

  const expense = foodExpenseAmount + rentExpenseAmount + clothingExpenseAmount;
  setElementValueById("total-expense", expense);
  // -----------
  // balance
  // get total income from field
  const totalIncome = getElementValueById("income-field");
  const balanceTotal = getElementById("total-expense");

  const currentBalance = totalIncome - balanceTotal;
  setElementById("balance-total", currentBalance);
});
