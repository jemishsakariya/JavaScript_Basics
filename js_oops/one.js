// Develop a system which contains classes for handling basic Enemy system.
// Develop a system with different enemies with a variety of features for each.
// Please define variables and methods necessary for each classes.

class Player {
  constructor(name, health, damage) {
    this.name = name;
    this.health = health;
    this.damage = damage;
  }

  attack(em) {
    console.log(
      `${this.name} attacks ${em.name} and give damage of ${this.damage}`
    );

    em.health -= this.damage;

    if (em.health >= 0) {
      console.log(`${em.name} remaining health is ${em.health}`);
    }

    if (em.health <= 0) {
      console.log(`${em.name} is Defeated`);
    }
  }
}

class Enemy {
  constructor() {
    super();
    this.arrOfEmemy = new Array();
  }

  attack(em, seEnemy) {
    console.log(
      `${seEnemy.name} attacks ${em.name} and give damage of ${seEnemy.damage}`
    );

    em.health -= seEnemy.damage;

    if (em.health >= 0) {
      console.log(`${em.name} remaining health is ${em.health}`);
    }

    if (em.health <= 0) {
      console.log(`${em.name} is Defeated`);
    }
  }
}

let p1 = { name: "p1", health: 100 };
let pl = new Player(p1.name, p1.health, 20);

let Ene = new Enemy();
Ene.arrOfEmemy.push(
  { name: "e1", health: 100, damage: 10 },
  { name: "e2", health: 100, damage: 15 },
  { name: "e3", health: 100, damage: 20 },
  { name: "e4", health: 100, damage: 25 }
);

let con = true;
const prompt = require("prompt-sync")();
console.log("Press 's' for Stop Playing");

while (con) {
  let input = prompt("Enter Key to Attack: ");
  if (input == "s") {
    con = false;
    break;
  }

  if (input) {
    let selectedEnemy = Math.floor(Math.random() * Ene.arrOfEmemy.length);
    if (Ene.arrOfEmemy[selectedEnemy].health <= 0) {
      console.log("This Enemy is already Defeated!");
      continue;
    }

    pl.attack(Ene.arrOfEmemy[selectedEnemy]);
    console.log();
    let e = Ene.arrOfEmemy[selectedEnemy];
    Ene.attack(p1, e);
  } else {
    console.log("You have No Enemy!!");
  }
}

/*
class Player1 {
  constructor(name, health, damage) {
    this.name = name;
    this.health = health;
    this.damage = damage;
  }

  attack(em) {
    console.log(
      `${this.name} attacks ${em.name} and give damage of ${this.damage}`
    );

    em.health -= this.damage;

    if (em.health >= 0) {
      console.log(`${em.name} remaining health is ${em.health}`);
    }

    if (em.health <= 0) {
      console.log(`${em.name} is Defeated`);
    }
  }
}

class Player2 extends Player1 {
  constructor(name, health, damage) {
    super(name, health, damage);
  }

  attack(em) {
    super.attack(em);
    console.log(`${this.name} is faster than ${em.name}`);
  }
}

let p1 = { name: "p1", health: 100 };
// let p2 = { name: "p2", health: 100 };

// Enemies
let arrOfEmemy = new Array();
let e = "e";
let num = 1;
for (let i = 1; i <= 10; i++) {
  let ene = e.split("e").join("e") + num++;
  arrOfEmemy[i] = { name: ene, health: 100 };
}

// Players
var player1 = new Player1(p1.name, p1.health, 20);
// var player2 = new Player2(p2.name, p2.health, 20);

// attack condition
let con = true;
const prompt = require("prompt-sync")();
console.log("Press 's' for Stop Playing");

while (con) {
  let input = prompt("Enter Number to Attack Enemy: ");

  if (input >= 1 && input <= arrOfEmemy.length) {
    if (arrOfEmemy[input].health <= 0) {
      console.log("This Enemy is already Defeated!");
      continue;
    }

    player1.attack(arrOfEmemy[input]);
  } else if (input == "s") {
    con = false;
  } else {
    console.log("You have No Enemy!!");
  }
}

*/

// var player1 = new Player1(p1.name, p1.health, 10);
// player1.attack(e1);
// player1.attack(e1);

/*
class Enemy {
  constructor(name, health, damage) {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.type = "Kife Killer";
  }

  attack(target) {
    console.log("-----Attack");
    console.log(
      this.name + " attacks " + target.name + " give damage of " + this.damage
    );

    target.health -= this.damage;

    target.type = "Kife Killer";

    if (target.health <= 0) {
      console.log(target.name + " is defeated.");
    } else {
      console.log(target.name + " remaining health is " + target.health);
    }
  }

  run() {
    console.log("Killer is running slow");
  }
}

class Zombie extends Enemy {
  constructor(name, health, damage) {
    super(name, health, damage);
    this.type = "Zombie";
  }

  attack(target) {
    console.log("-----Attack 2");
    console.log(
      this.name + " bites " + target.name + " give damage of " + this.damage
    );

    target.health -= this.damage;

    target.type = "Zombie";

    if (target.health <= 0) {
      console.log(target.name + " is defeated and becomes a zombie.");
    } else {
      console.log(target.name + " remaining health is " + target.health);
    }
  }
}

let p1 = { name: "p1", health: 100 };
let p2 = { name: "p2", health: 100 };

var e12 = new Enemy(p1.name, p1.health, 10);
e12.attack(p2);
e12.run();
console.log("Enemy type is " + e12.type + "\n");


//

let p3 = { name: "p3", health: 100 };
var e13 = new Zombie(e12.name, e12.health, 20);
e13.attack(p3);
console.log("Enemy type is " + e13.type + "\n");

var e31 = new Zombie(p3.name, p3.health, 30);
e31.attack(p1);
e31.run();
*/

//

// class Enemy {
//     constructor(name) {
//       this.name = name;
//     }

//     attack() {
//       console.log("Enemy is attacking with Knife");
//     }

//     run(){
//       console.log("Enemy is running fast");
//     }
//   }

//   class Zombie extends Enemy {
//     constructor(name) {
//       super(name);
//     }

//     attack() {
//       console.log("Enemy is attacking with bite");
//     }
//   }

//   var e1 = new Zombie("p1");
//   console.log(e1.attack());
//   console.log(e1.name);
