// common functions are here
// common function of input field
function getElementValueById(elementId){
    const foodExpense = document.getElementById(elementId);
    const foodExpenseString = foodExpense.value ;
    const foodExpenseAmount = parseInt(foodExpenseString);
    return foodExpenseAmount;
}
// common function of element text
function getElementById(elementId){
    const element = document.getElementById(elementId);
    const elementTextString = element.innerText;
    const elementText = parseInt(elementTextString);
    return elementText;
}
// setting innertext function
function setElementValueById (elementId,value){
    const totalExpense = document.getElementById(elementId);
    totalExpense.innerText = value ;
}
// setting innertext by id
function setElementById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value ;
}