

function calculateQuadraticEquation() {
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a, b, c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = " + result;
}

function getResult(a, b, c) {
    "use strict";
    debugger;
    let d = b ** 2 - 4 * a * c;
    let x = [];
    if (d === 0)
        x[0] = b / 2 * a;
    else if (d > 0) {
        x[0] = (-b + Math.sqrt(d)) / 2 * a;
        x[1] = (-b - Math.sqrt(d)) / 2 * a;
    }
    return x;
}

function calculateAverageRating() {
    let marks = window.marks.value.split("").map(Number).filter((n) => !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
    if (marks.length > 5) {
        console.log('Оценок больше 5');
        marks = marks.slice(0, 5);
    }
    let sum = 0;
    for (i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    averageMark = sum / marks.length;
    return averageMark;
}

function calculateDrinkTask() {
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday) {
   
    console.log(result);
    return result;
}