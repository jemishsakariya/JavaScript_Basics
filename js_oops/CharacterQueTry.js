// Define the base class for all characters
class Character {
  // Define the constructor function that initializes the object
  constructor(name, health, attack) {
    this.name = name; // The name of the character
    this.health = health; // The health points of the character
    this.attack = attack; // The attack points of the character
  }

  // Define a method that returns the name of the character
  getName() {
    return this.name;
  }

  // Define a method that returns the health of the character
  getHealth() {
    return this.health;
  }

  // Define a method that reduces the health of the character by a given amount
  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} took ${amount} damage.`);
  }

  // Define a method that increases the health of the character by a given amount
  heal(amount) {
    this.health += amount;
    console.log(`${this.name} healed ${amount} health.`);
  }

  // Define a method that returns the attack of the character
  getAttack() {
    return this.attack;
  }

  // Define a method that attacks another character and reduces its health by the attack points of this character
  attackCharacter(target) {
    target.takeDamage(this.attack);
    console.log(`${this.name} attacked ${target.name}.`);
  }

  // Define a method that defends against another character and reduces the damage taken by half
  defendCharacter(attacker) {
    this.takeDamage(attacker.attack / 2);
    console.log(`${this.name} defended against ${attacker.name}.`);
  }
}

// Define a subclass that extends the Character class
class Meele extends Character {
  // Define the constructor function that calls the parent constructor and initializes the object with additional properties
  constructor(name, health, attack, closeRangeHit) {
    super(name, health, attack); // Call the parent constructor with the common properties
    this.closeRangeHit = closeRangeHit; // The close range hit points of the character
  }

  // Define a method that returns the close range hit of the character
  getCloseRangeHit() {
    return this.closeRangeHit;
  }

  // Define a method that performs a close range hit on another character and reduces its health by the close range hit points of this character
  closeRangeHitCharacter(target) {
    target.takeDamage(this.closeRangeHit);
    console.log(`${this.name} performed a close range hit on ${target.name}.`);
  }
}

// Define a subclass that extends the Character class
class Flying extends Character {
  // Define the constructor function that calls the parent constructor and initializes the object with additional properties
  constructor(name, health, attack, longRangeAttack, fly) {
    super(name, health, attack); // Call the parent constructor with the common properties
    this.longRangeAttack = longRangeAttack; // The long range attack points of the character
    this.fly = fly; // The fly ability of the character
  }

  // Define a method that returns the long range attack of the character
  getLongRangeAttack() {
    return this.longRangeAttack;
  }

  // Define a method that performs a long range attack on another character and reduces its health by the long range attack points of this character
  longRangeAttackCharacter(target) {
    target.takeDamage(this.longRangeAttack);
    console.log(
      `${this.name} performed a long range attack on ${target.name}.`
    );
  }

  // Define a method that returns the fly ability of the character
  getFly() {
    return this.fly;
  }

  // Define a method that performs the fly ability and increases the health of the character by 10
  flyCharacter() {
    this.heal(10);
    console.log(`${this.name} flew in the air and gained 10 health.`);
  }
}

// Define a subclass that extends the Meele class
class SingleAttack extends Meele {
  // Define the constructor function that calls the parent constructor and initializes the object with additional properties
  constructor(name, health, attack, closeRangeHit, singleAttack) {
    super(name, health, attack, closeRangeHit); // Call the parent constructor with the common properties
    this.singleAttack = singleAttack; // The single attack points of the character
  }

  // Define a method that returns the single attack of the character
  getSingleAttack() {
    return this.singleAttack;
  }

  // Define a method that performs a single attack on another character and reduces its health by the single attack points of this character
  singleAttackCharacter(target) {
    target.takeDamage(this.singleAttack);
    console.log(`${this.name} performed a single attack on ${target.name}.`);
  }
}

// Define a subclass that extends the Meele class
class SplashAttack extends Meele {
  // Define the constructor function that calls the parent constructor and initializes the object with additional properties
  constructor(name, health, attack, closeRangeHit, splashAttack) {
    super(name, health, attack, closeRangeHit); // Call the parent constructor with the common properties
    this.splashAttack = splashAttack; // The splash attack points of the character
  }

  // Define a method that returns the splash attack of the character
  getSplashAttack() {
    return this.splashAttack;
  }

  // Define a method that performs a splash attack on an array of characters and reduces their health by the splash attack points of this character
  splashAttackCharacters(targets) {
    for (let target of targets) {
      target.takeDamage(this.splashAttack);
      console.log(`${this.name} performed a splash attack on ${target.name}.`);
    }
  }
}

// Define a subclass that extends the Flying class
class Hide extends Flying {
  // Define the constructor function that calls the parent constructor and initializes the object with additional properties
  constructor(name, health, attack, longRangeAttack, fly, hide) {
    super(name, health, attack, longRangeAttack, fly); // Call the parent constructor with the common properties
    this.hide = hide; // The hide ability of the character
  }

  // Define a method that returns the hide ability of the character
  getHide() {
    return this.hide;
  }

  // Define a method that performs the hide ability and reduces the damage taken by 90%
  hideCharacter(attacker) {
    this.takeDamage(attacker.attack / 10);
    console.log(
      `${this.name} hid from ${attacker.name} and took only 10% damage.`
    );
  }
}

// Define a subclass that extends the Flying class
class Transform extends Flying {
  // Define the constructor function that calls the parent constructor and initializes the object with additional properties
  constructor(name, health, attack, longRangeAttack, fly, transform) {
    super(name, health, attack, longRangeAttack, fly); // Call the parent constructor with the common properties
    this.transform = transform; // The transform ability of the character
  }

  // Define a method that returns the transform ability of the character
  getTransform() {
    return this.transform;
  }

  // Define a method that performs the transform ability and changes the name and attack of the character
  transformCharacter(newName, newAttack) {
    this.name = newName;
    this.attack = newAttack;
    console.log(`${this.name} transformed and changed its name and attack.`);
  }
}

// Create some objects using the classes
let meele1 = new SingleAttack("Meele1", 100, 20, 30, 40);
let meele2 = new SplashAttack("Meele2", 100, 20, 30, 10);
let flying1 = new Hide("Flying1", 100, 20, 30, true, true);
let flying2 = new Transform("Flying2", 100, 20, 30, true, true);

// Test some methods
meele1.attackCharacter(flying1); // Meele1 attacked Flying1. Flying1 took 20 damage.
flying1.defendCharacter(meele1); // Flying1 defended against Meele1. Flying1 took 10 damage.

meele1.singleAttackCharacter(meele2);
console.log(meele1.getSingleAttack());
