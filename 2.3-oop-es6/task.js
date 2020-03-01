//Задача №1
// class Weapon {
//     constructor(name, attack, durability, range) {
//         this.name = name;
//         this.attack = attack;
//         this.durability = durability;
//         this.baseDurability = durability;
//         this.range = range;
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
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.baseDurability = durability;
        this.range = range;
    }
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
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range)
        this.type = 'Рука';
    }
}

class Bow extends Weapon {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range)
        this.type = 'Лук';
    }
}

class Sword extends Weapon {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range)
        this.type = 'Меч';
    }
}

class Knife extends Weapon {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range)
        this.type = 'Нож';
    }
}

class Staff extends Weapon {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range)
        this.type = 'Посох';
    }
}

class ReinforcedArm extends Arm {
    constructor(name, attack, durability, range) {
        super(name)
        attack === '-' ? this.attack = arm.attack : this.attack = attack;
        durability === '-' ? this.durability = arm.durability : this.durability = durability;
        range === '-' ? this.range = arm.range : this.range = range;
        this.baseDurability = this.durability;
    }
}

class ReinforcedBow extends Bow {
    constructor(name, attack, durability, range) {
        super(name)
        attack === '-' ? this.attack = bow.attack : this.attack = attack;
        durability === '-' ? this.durability = bow.durability : this.durability = durability;
        range === '-' ? this.range = bow.range : this.range = range;
        this.baseDurability = this.durability;
    }
}

class ReinforcedSword extends Sword {
    constructor(name, attack, durability, range) {
        super(name)
        attack === '-' ? this.attack = sword.attack : this.attack = attack;
        durability === '-' ? this.durability = sword.durability : this.durability = durability;
        range === '-' ? this.range = sword.range : this.range = range;
        this.baseDurability = this.durability;
    }
}

class ReinforcedKnife extends Knife {
    constructor(name, attack, durability, range) {
        super(name)
        attack === '-' ? this.attack = knife.attack : this.attack = attack;
        durability === '-' ? this.durability = knife.durability : this.durability = durability;
        range === '-' ? this.range = knife.range : this.range = range;
        this.baseDurability = this.durability;
    }
}

class ReinforcedStaff extends Staff {
    constructor(name, attack, durability, range) {
        super(name)
        attack === '-' ? this.attack = staff.attack : this.attack = attack;
        durability === '-' ? this.durability = staff.durability : this.durability = durability;
        range === '-' ? this.range = staff.range : this.range = range;
        this.baseDurability = this.durability;
    }
}

const arm = new Arm('Рука', 1, Infinity, 1);
const bow = new Bow('Лук', 10, 200, 3);
const sword = new Sword('Меч', 25, 500, 1);
const knife = new Knife('Нож', 5, 300, 1);
const staff = new Staff('Посох', 8, 300, 2);
const longBow = new ReinforcedBow('Длинный лук', 15, '-', 4);
const axe = new ReinforcedSword('Секира', 27, 800, '-');
const stormStaff = new ReinforcedStaff('Посох Бури', 10, '-', 3);

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
