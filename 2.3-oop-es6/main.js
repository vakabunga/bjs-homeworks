

class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    }
    takeDamage(damage) {
        if (this.durability > damage) this.durability -= damage;
        else if (this.durability === Infinity) this.durability = Infinity;
        else this.durability = 0;
    }
    set getDamage() {
        if ((this.durability < (this.durability * 0.30)) || (this.durability === infinity)) return this.attack;
        else if (this.durability === 0) return 0;
        else return this.attack / 2;
    }
    isBroken() {
        this.durability > 0 ? false : true;
    }
}
const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);
const longBow = new Weapon('Длинный лук', 15, arm.durability, 4);
const ax = new Weapon('Секира', 27, 800, sword.range);
const stormStaff = new Weapon('Посох Бури', 10, staff.durability, 3);