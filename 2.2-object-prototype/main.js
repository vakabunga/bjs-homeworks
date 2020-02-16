function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;
    console.log(birthday);
    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;
}

function checkBirthday(birthday) {
    const now = new Date(); //текущая дата
    const dateOfBirth = new Date(Number(birthday.substring(0, 4)), (Number(birthday.substring(5, 7)) - 1), Number(birthday.substring(8, 10))); //конвертация входящей даты
    const diff = +now - +dateOfBirth; // разница в милисекундах между текущей датой и др
    let leapCounter = 0; //Счетчик високосных годов
    let counter = 0; // счетчик невисокосных годов
    for (let i = dateOfBirth.getFullYear(); i < now.getFullYear(); i++) { // вычисляем сколько високосных и невисокосных годов было со дня рождения
        if (checkLeapYear(i)) leapCounter++;
        else counter++;
    }
    let checkYearOfBirth = new Date(dateOfBirth.getFullYear(), 01, 28); //задаем дату 28 фераля для года рождения

    // Если человек родился в високосный год до 28 февраля, то високосность этого года не влияет на вычисление возраста
    if ((+checkYearOfBirth > +dateOfBirth) && (checkLeapYear(dateOfBirth.getFullYear()))) leapCounter--;

    const age = diff / ((leapCounter * 31623200000 + counter * 31536000000) / (leapCounter + counter));
    return age > 18;

    function checkLeapYear(year) { // функция определения високосного года
        return ((!(year % 400)) || ((year % 100) && !(year % 4)));
    }
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };
    const result = getAnimalSound(animal);
    document.getElementById('sound').innerHTML = result;
}

function getAnimalSound(animal) {
    const isValidAnimal = !!animal;
    const sound = animal.sound;
    return (isValidAnimal ? animal.sound : 'null');
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');
        console.log(marks);
        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += Number(marks[i]);
    }
    return Math.round(sum / marks.length);
}