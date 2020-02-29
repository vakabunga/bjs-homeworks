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

