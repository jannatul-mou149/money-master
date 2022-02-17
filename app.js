//using common incomeInput function to calculate balance & saving amount
function incomeInput() {
    let incomeInputText = document.getElementById("income-input");
    let incomeInputAmount = parseInt(incomeInputText.value);
    return incomeInputAmount;
}
// event handler for calculate btn
document.getElementById('calculate-btn').addEventListener('click', function () {
    incomeInput();
    let foodInput = document.getElementById('food-input').value;
    let rentInput = document.getElementById('rent-input').value;
    let clothesInput = document.getElementById('clothes-input').value;

    var expenses = document.getElementById('expenses-total');
    var balance = document.getElementById('balance');

    //User can't give any string, only numbers allowed
    if (isNaN(incomeInput()) || isNaN(foodInput) || isNaN(rentInput) || isNaN(clothesInput)) {
        alert('You can\'t input a string');
    }
    //Income can't be zero , any other expenses can.
    else if (incomeInput() <= 0 || foodInput < 0 || rentInput < 0 || clothesInput < 0) {
        alert('Your input amount can\'t be negative');
    }
    //User can't left any field unfilled
    else if (incomeInput() == "" || foodInput == "" || rentInput == "" || clothesInput == "") {
        alert('You can\'t keep input feild empty');
    }
    else {
        totalExpenses = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);
        balanceNew = incomeInput() - totalExpenses;

        //If user's income is lower than their expense they get error msg
        if (balanceNew < 0) {
            alert('Opps!! Your Expenses are bigger than your income.');
        }
        else {
            expenses.innerText = totalExpenses;
            balance.innerText = balanceNew;
        }
    }

})
//event handler for saving amount , save button
document.getElementById('save-btn').addEventListener('click', function () {
    let saveInput = parseFloat(document.getElementById('save-input').value);

    let savedAmmount = document.getElementById('saving-amount');
    let remaining = document.getElementById('remaining-balance');
    message = document.getElementById('message');

    if (isNaN(saveInput)) {
        alert('You can not input a string');
    }

    else if (saveInput == "" || saveInput < 0) {
        alert('You can\'t keep input feild empty or put negative value');
    }

    let savingammount = incomeInput() * (saveInput / 100);

    let temp = savingammount + totalExpenses;

    remain = incomeInput() - temp;
    if (saveInput > 100) {
        alert('You can not save more than 100% of your total income');
    }
    else if (temp <= incomeInput()) {
        savedAmmount.textContent = `${savingammount}`;
        remaining.textContent = `${remain}`;
        message.textContent = "";
    }
    else {
        message.textContent = `You have left ${balanceNew} taka only. However, you are willing to save ${savingammount} taka.Sorry! you can't do that.Please try with lower Amount.`;
        remaining.textContent = "0";
    }
})

