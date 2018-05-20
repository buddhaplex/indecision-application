class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() { // overrides initial getDescription (in parent)
    let description = super.getDescription();

    if (this.hasMajor()) {
      description = description += ` My major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Traveler('Eric Andrade', 46, 'Providence');
console.log(me.getGreeting());
// console.log(me.getDescription());

const other = new Traveler(undefined, undefined, "Nowhere");
console.log(other.getGreeting());
// console.log(other.getDescription());

const daughter = new Student('Cadence Andrade', 11, 'Musical Theatre');
// console.log(daughter.getGreeting());
console.log(daughter.getDescription());