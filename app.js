document.getElementById('calculate-btn').addEventListener('click', function () {
    incomeInput = document.getElementById('income-input').value;
    let foodInput = document.getElementById('food-input').value;
    let rentInput = document.getElementById('rent-input').value;
    let clothesInput = document.getElementById('clothes-input').value;

    var expenses = document.getElementById('expenses-total');
    var balance = document.getElementById('balance');

    if (isNaN(incomeInput) || isNaN(foodInput) || isNaN(rentInput) || isNaN(clothesInput)) {
        alert('You can not input a string');
        location.href = "index.html";
    }

    else if (incomeInput == "" || foodInput == "" || rentInput == "" || clothesInput == "") {
        alert('You can not keep input feild empty');
        location.href = "index.html";
    }
    else {
        totalExpenses = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);
        balanceNew = incomeInput - totalExpenses;

        if (balanceNew < 0) {
            alert('Opps!! Your Expenses are bigger than your income.');
        }
        else {
            expenses.innerText = totalExpenses;
            balance.innerText = balanceNew;
        }
    }

})
document.getElementById('save-btn').addEventListener('click', function () {
    let saveInput = parseFloat(document.getElementById('save-input').value);

    let savedAmmount = document.getElementById('saving-amount');
    let remaining = document.getElementById('remaining-balance');
    message = document.getElementById('message');

    if (isNaN(saveInput)) {
        alert('You can not input a string');
    }

    else if (saveInput == "") {
        alert('You can not keep input feild empty');
    }

    let savingammount = incomeInput * (saveInput / 100);

    let temp = savingammount + totalExpenses;

    remain = incomeInput - temp;
    if (saveInput > 100) {
        alert('You can not save more than 100% of your total income');
    }
    else if (temp <= incomeInput) {
        savedAmmount.textContent = `${savingammount}`;
        remaining.textContent = `${remain}`;
        message.textContent = "";
    }
    else {
        message.textContent = `You have left ${balanceNew} taka only. However, you are willing to save ${savingammount} taka.Sorry! you can't do that. Try with lower value`;
        remaining.textContent = "0";
    }
})

