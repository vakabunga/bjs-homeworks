//Задача №1

let d = 0;
let x1 = 0;
let x2 = 0;

function getSolutions(a, b, c) {
    d = b ** 2 - 4 * a * c;
    if (d < 0)
        return (`{ D: ${d} }`);
    else if (d === 0) {
        x1 = -b / (2 * a);
        return (`{ roots: ${x1}, D: ${d} }`);
    }
    else {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        return (`{ roots: [ x1: ${x1}, x2: ${x2} ], D: ${d} }`);
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    if (b < 0 && c > 0)
        console.log(`Вычисляем корни квадратного уравнения ${a}x² - ${Math.abs(b)}x + ${c}»`);
    else if (b > 0 && c < 0)
        console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x - ${Math.abs(c)}»`);
    else if (b < 0 && c < 0)
        console.log(`Вычисляем корни квадратного уравнения ${a}x² - ${Math.abs(b)}x - ${Math.abs(c)}»`);
    else
        console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}»`);
    console.log(`«Значение дискриминанта: ${d}»`);
    if (d < 0)
        console.log('«Уравнение не имеет вещественных корней»');
    else if (d === 0)
        console.log(`«Уравнение имеет один корень X₁ = ${x1}»`);
    else console.log(`«Уравнение имеет два корня. X₁ = ${x1}, X₂ = ${x2}»`);
}

//Задача №2

// let data = {
//     algebra: [1, 5, 5, 5, 5],
//     physics: [2, 5, 5, 5, 5],
//     math: [3, 5, 5, 5, 5],
//     geometry: [4, 5, 5, 5, 5],
//     music: [5, 5, 5, 5, 5]
// }

function getAverageMarkByCourse(discipline) {
    let sum = 0;
    for (let i = 0; i < discipline.length; i++) {
        sum += discipline[i];
    }
    return (sum / discipline.length);
}

function getAverageScore(data) {
    let sumMark = 0;
    let counter = 0;
    for (let prop in data) {
        marksByCourse = data[prop];
        data[prop] = getAverageMarkByCourse(marksByCourse);
        sumMark += getAverageMarkByCourse(marksByCourse);
        counter++;
    }
    data.average = sumMark / counter;
    return data;
}

//Задача №3

function getPersonData(secretData) {
    let piratesNames = {
        firstName: '',
        secondName: ''
    }
    piratesNames.firstName = getData(secretData[0]);
    piratesNames.secondName = getData(secretData[1]);
    return piratesNames;
}

function getData(n) {
    let person = ['Rodrigo', 'Emilio'];
    return person[n];
}