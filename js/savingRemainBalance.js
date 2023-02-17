
document.getElementById('btn-save').addEventListener('click', function(){
    const saveField = getElementValueById('save-field');
    const savingPercent = saveField/100;

    const totalIncome = getElementValueById('income-field');
    const savingString = (totalIncome * savingPercent).toFixed(2) ;
    const saving = parseFloat(savingString);

    setElementById('saving-amount',saving);

    const balanceTotal = getElementById('balance-total');
    const remainingBalance = balanceTotal - saving ;
    // setting value
    setElementById('remaining-balance',remainingBalance);
})