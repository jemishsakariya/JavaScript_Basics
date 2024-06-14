class Character {
  constructor(name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = attack;
  }

  getName() {
    return this.name;
  }

  getHealth() {
    return this.health;
  }

  getAttack() {
    return this.attack;
  }

  takeDamage(damageAmount) {
    this.health -= damageAmount.attack;
    console.log(
      `${this.name} take damage of ${damageAmount.attack} remaining health is ${damageAmount.health}`
    );
  }
}

class Meele extends Character {
  constructor(name, health, attack, closeRangeHit) {
    super(name, health, attack);
    this.closeRangeHit = closeRangeHit;
  }

  getCloseRangeHit() {
    return this.closeRangeHit;
  }

  attackCloseRange(target) {
    console.log(`${this.name} attacks ${target.name}`);
    target.health -= this.closeRangeHit;
    console.log(
      `${target.name} take damage of ${this.closeRangeHit} now health is: ${target.health} `
    );
    target.takeDamage(target);
  }
}

class Fly extends Character {
  constructor(name, health, attack, fly) {
    super(name, health, attack);
    this.fly = fly;
  }

  getFly() {
    return this.fly;
  }

  flyCharacter(target) {
    console.log(
      `${this.name} attacks ${target.name} and it is Flying so it also increase its health by 10.`
    );
    target.health += 10;
    console.log(`${target.name} health is: ${target.health}`);
    target.takeDamage(target);
  }
}

class SingleAttack extends Meele {
  constructor(name, health, attack, closeRangeHit, singleAtk) {
    super(name, health, attack, closeRangeHit);
    this.singleAtk = singleAtk;
  }

  getSingleAttack() {
    return this.singleAtk;
  }

  singleAttackCharacter(target) {
    console.log(
      `${this.name} is attacks ${target.name} and it also take damage of ability of 'singleAttack'`
    );
    target.health -= this.singleAtk;
    console.log(
      `${target.name} take Damage of ${this.singleAtk} now remaining health is: ${target.health} `
    );
    this.attackCloseRange(target);
  }
}

class Hide extends Fly {
  constructor(name, health, attack, fly, hide) {
    super(name, health, attack, fly);
    this.hide = hide;
  }

  getHide() {
    return this.hide;
  }

  HideCharacter(target) {
    console.log(
      `${this.name} is attacks ${target.name} and it take half of damage`
    );
    target.attack = target.attack / 2;
    this.flyCharacter(target);
  }
}

let p1 = new Meele("Meele Player 1", 100, 15, 10);
let p2 = new Meele("Meele Player 2", 100, 15, 10);
p1.attackCloseRange(p2);

console.log();

let p3 = new Fly("Fly 1", 100, 15, 10);
let p4 = new Fly("Fly 2", 100, 15, 10);
p3.flyCharacter(p4);

console.log();

let p5 = new SingleAttack("SingleAttack 1", 100, 10, 20, 5);
let p6 = new SingleAttack("SingleAttack 2", 100, 10, 20, 5);
p5.singleAttackCharacter(p6);

console.log();

let p7 = new Hide("Hide 1", 100, 50, 10, 40);
let p8 = new Hide("Hide 2", 100, 50, 10, 40);
p7.HideCharacter(p8);
