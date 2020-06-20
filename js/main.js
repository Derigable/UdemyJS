'use strict';

let startButton = document.querySelector('#start'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    expensesItems = document.querySelectorAll('.expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('#income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    'use strict';

    let money, time;
    
    function start() {
        money = +prompt("Ваш бюджет на месяц?", '');
        time = prompt("Введите дату в формате YYYY-MM-DD", '');
    
        while (isNaN(money) || money == "" || money == null) {
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
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце", '');
            let secondAnswer = +prompt("Во сколько обойдется?", '');

            if ((typeof (firstAnswer)) != null && (typeof (secondAnswer) != null) && firstAnswer != '' && secondAnswer != '' && firstAnswer.length < 50) {
                appData.expenses[firstAnswer] = secondAnswer;
            } else {
                alert("Вы неправильно ввели ответы, попробуйте еще раз");
                i--;
            }
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let optExpensesAnswer = prompt("Статья необязательных расходов?");

            if ((typeof (optExpensesAnswer)) != null && optExpensesAnswer != "" && optExpensesAnswer.length < 50) {
                appData.optionalExpenses[i] = optExpensesAnswer;
            } else {
                alert("Вы неправильно ввели ответ, попробуйте еще раз");
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert(`Ваш бюджет на 1 день = ${appData.moneyPerDay}`);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?");
            let percent = +prompt("Под какой процент?");

            appData.monthIncome = (save / 100 / 12 * percent).toFixed();
            alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
        }
    },
    chooseIncome: function () {
        let items;
        let additionalItem;

        for (let i = 0; i < 1; i++) {
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)");

            if (items == "" || items == null) {
                alert("Вы неверно ввели данные. Пожалуйста, введите их еще раз");
                i--;
            }
        }

        appData.income = items.split(', ');

        for (let i = 0; i < 1; i++) {
            additionalItem = prompt("Может, что-то еще?");

            if (additionalItem != "" && additionalItem != null) {
                appData.income.push(additionalItem);
            }
        }

        appData.income.sort();

        appData.income.forEach(function(item, index) {
            alert(`Способы доп. заработка: ${index + 1}) ${item}`);
        })
    }
};

console.log(`Наша программа включает в себя данные:`);
for (let data in appData) {
    console.log(`${data}`);
}

//console.log(appData);