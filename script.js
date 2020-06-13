'use strict';

let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

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

/* второй вариант цикла через while

let i = 0;
while (i < 2) {
    let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце", '');
    let secondAnswer = +prompt("Во сколько обойдется?", '');

    if ((typeof(firstAnswer)) != null && (typeof(secondAnswer) != null) &&   firstAnswer != '' && secondAnswer != '' && firstAnswer.length < 50) {
        appData.expenses[firstAnswer] = secondAnswer;
        i++;
    } else {
        alert("Вы неправильно ввели ответы, попробуйте еще раз");
        i--;
    }
}
*/

/* третий вариант цикла через do ... while 

let i = 0;
do {
    let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце", '');
    let secondAnswer = +prompt("Во сколько обойдется?", '');

    if ((typeof(firstAnswer)) != null && (typeof(secondAnswer) != null) &&   firstAnswer != '' && secondAnswer != '' && firstAnswer.length < 50) {
        appData.expenses[firstAnswer] = secondAnswer;
        i++;
    } else {
        alert("Вы неправильно ввели ответы, попробуйте еще раз");
    }

} while (i < 2);
*/


appData.moneyPerDay = appData.budget / 30;

alert(`Ваш бюджет на 1 день = ${appData.moneyPerDay}`);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}