'use strict';

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    if (Number(percent) || percent == 0)
        percent = Number(percent) / 100;
    else return (`Параметр "Процентная ставка" содержит неправильное значение ${percent}`);

    if (Number(contribution) || contribution == 0)
        contribution = Number(contribution);
    else return (`Параметр "Начальный взнос" содержит неправильное значение ${contribution}`);

    if (Number(amount) || amount == 0)
        amount = Number(amount);
    else return (`Параметр "Общая стоимость" содержит неправильное значение ${amount}`);

    if (date.indexOf('-') > 4)
        return (`Введите правильно год в дате!!!!!`);

    let loan = amount - contribution;
    let amountOfMonths = (Number(date.substring(0, 4)) - new Date().getFullYear()) * 12 + Number(date.substring(5, 7)) - new Date().getMonth() - 1;
    let monthlyPayment = loan * ((percent / 12) + (percent / 12) / (Math.pow((1 + percent / 12), amountOfMonths) - 1));
    return ((monthlyPayment * amountOfMonths).toFixed(2));
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (name === 'null' || name === 'undefined' || name === '' || isFinite(name))
        return (`Привет, мир! Меня зовут Аноним`);
    else return (`Привет, мир! Меня зовут ${name}`);
}