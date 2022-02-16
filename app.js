document.getElementById('calculate-btn').addEventListener('click', function () {
    let incomeInput = document.getElementById('income-input').value;
    let foodInput = document.getElementById('food-input').value;
    let rentInput = document.getElementById('rent-input').value;
    let clothesInput = document.getElementById('clothes-input').value;

    var expenses = document.getElementById('expenses-total');
    var balance = document.getElementById('balance');


    var totalExpenses = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);
    var balanceNew = incomeInput - totalExpenses;

    expenses.innerText = totalExpenses;
    balance.innerText = balanceNew;
})