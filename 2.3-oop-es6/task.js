//Задача №1
// class Weapon {
//     constructor(features) {
//         this.name = features.name;
//         this.attack = features.attack;
//         this.durability = features.durability;
//         this.baseDurability = features.durability;
//         this.range = features.range;
//     }
//     takeDamage(damage) {
//         if (this.durability > damage) this.durability -= damage;
//         else if (this.durability === Infinity) this.durability = Infinity;
//         else this.durability = 0;
//     }
//     getDamage() {
//         if ((this.durability > (this.baseDurability * 0.30)) || (this.durability === Infinity)) return this.attack;
//         else if (this.durability === 0) return 0;
//         else return this.attack / 2;
//     }
//     isBroken() {
//         return (this.durability > 0 ? false : true);
//     }
// }
// const arm = new Weapon('Рука', 1, Infinity, 1);
// const bow = new Weapon('Лук', 10, 200, 3);
// const sword = new Weapon('Меч', 25, 500, 1);
// const knife = new Weapon('Нож', 5, 300, 1);
// const staff = new Weapon('Посох', 8, 300, 2);
// const longBow = new Weapon('Длинный лук', 15, arm.durability, 4);
// const axe = new Weapon('Секира', 27, 800, sword.range);
// const stormStaff = new Weapon('Посох Бури', 10, staff.durability, 3);

//Задача №2
class Weapon {
    takeDamage(damage) {
        if (this.durability > damage) this.durability -= damage;
        else if (this.durability === Infinity) this.durability = Infinity;
        else this.durability = 0;
    }
    getDamage() {
        if ((this.durability > (this.baseDurability * 0.30)) || (this.durability === Infinity)) return this.attack;
        else if (this.durability === 0) return 0;
        else return this.attack / 2;
    }
    isBroken() {
        return (this.durability > 0 ? false : true);
    }
}

class Arm extends Weapon {
    constructor() {
        super()
        this.name = 'Рука';
        this.attack = 1;
        this.durability = Infinity;
        this.baseDurability = this.durability;
        this.range = 1;
        this.type = 'Рука';
    }
}

class Bow extends Weapon {
    constructor() {
        super()
        this.name = 'Лук';
        this.attack = 10;
        this.durability = 200;
        this.baseDurability = this.durability;
        this.range = 3;
        this.type = 'Лук';
    }
}

class Sword extends Weapon {
    constructor() {
        super()
        this.name = 'Меч';
        this.attack = 25;
        this.durability = 500;
        this.baseDurability = this.durability;
        this.range = 1;
        this.type = 'Меч';
    }
}

class Knife extends Weapon {
    constructor() {
        super()
        this.name = 'Нож';
        this.attack = 5;
        this.durability = 300;
        this.baseDurability = this.durability;
        this.range = 1;
        this.type = 'Нож';
    }
}

class Staff extends Weapon {
    constructor() {
        super()
        this.name = 'Посох';
        this.attack = 8;
        this.durability = 300;
        this.baseDurability = this.durability;
        this.range = 2;
        this.type = 'Посох';
    }
}

class ReinforcedBow extends Bow {
    constructor() {
        super()
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

class ReinforcedSword extends Sword {
    constructor() {
        super()
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
        this.baseDurability = this.durability;
    }
}

class ReinforcedStaff extends Staff {
    constructor() {
        super()
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}

const arm = new Arm();
const bow = new Bow();
const sword = new Sword();
const knife = new Knife();
const staff = new Staff();
const longBow = new ReinforcedBow();
const axe = new ReinforcedSword();
const stormStaff = new ReinforcedStaff();

//Задача №3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.diary = [];
    }
    getName() {
        return this.name;
    }
    addGrade(grade, subject) {
        if (grade < 1 || grade > 5 || !Number.isInteger(grade)) {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
            return 0;
        }
        else { // выполняем код, если отметка соответствует требованиям
            let newMark = { //заводим данные в массив
                subject: subject,
                grade: [grade],
            }

            if (this.diary.length === 0) { //проверяем пустой ли дневник, если да - добавляем отметку
                this.diary.push(newMark);
                return 1;
            }

            let isAbsent = 0;
            for (let i = 0; i < this.diary.length; i++) { //если массив не пустой, проверяем его на наличие схожего предмета

                if (this.diary[i].subject === subject) {
                    this.diary[i].grade.push(newMark.grade[0]) //добавляем отметку в конец массива с оценками
                    return this.diary[i].grade.length; //возвращаем количество поставленных отметок по предмету
                }
                else {
                    isAbsent++; //счетчик показывает добавилась ли оценка в массив или нет
                }

            } //если оценка не добавилась и такого предмета нет, добавляем его отдельным значением массива diary
            if (isAbsent === this.diary.length) {
                this.diary.push(newMark);
                return 1;
            }
        }
    }
    getAverageBySubject(subject) {
        let sum = 0;
        let index = this.diary.map(function (diaryArray) {
            return diaryArray.subject;
        }).indexOf(subject);
        if (index < 0) return 0;
        for (let i = 0; i < this.diary[index].grade.length; i++) {
            sum += this.diary[index].grade[i];
        }
        return (sum / this.diary[index].grade.length);
    }
    getTotalAverage() {
        let sumGrades = 0;
        let counter = 0;
        for (let i = 0; i < this.diary.length; i++) { //перебираем значение свойств дневника
            for (let subI = 0; subI < this.diary[i].grade.length; subI++) {
                sumGrades += this.diary[i].grade[subI];
                counter++;
            }
        }
        return sumGrades / counter; //делим сумму средних значений по предметам на количество предметов
    }

}

const log = new StudentLog('Alex Pushkin');
