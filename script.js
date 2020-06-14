'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце", '');
        let secondAnswer = +prompt("Во сколько обойдется?", '');
        
        if ((typeof(firstAnswer)) != null && (typeof(secondAnswer) != null) &&   firstAnswer != '' && secondAnswer != '' && firstAnswer.length < 50) {
            appData.expenses[firstAnswer] = secondAnswer;
        } else {
            alert("Вы неправильно ввели ответы, попробуйте еще раз");
            i--;
        }
    }
}
 
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert(`Ваш бюджет на 1 день = ${appData.moneyPerDay}`);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?");
        let percent = +prompt("Под какой процент?");

        appData.monthIncome = (save/100/12*percent).toFixed();
        alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
    }
}

checkSavings();

console.log(appData);