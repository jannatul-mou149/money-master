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

