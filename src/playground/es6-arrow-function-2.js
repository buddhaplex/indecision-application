// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 290, 34));

// this keyword - no longer bound with arrow functions

// const user = {
//   name: 'Eric',
//   cities: ['Boston', 'New York', 'San Francisco', 'Chicago'],
//   printPlacesLived: function () {
//     this.cities.forEach((city) => {
//       console.log(this.name + ' has lived in ' + city + '.');
//     });
//   }
// };

// user.printPlacesLived();

// es6 method definition syntax -- 

const user = {
  name: 'Eric',
  cities: ['Boston', 'New York', 'San Francisco', 'Chicago'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [4, 5, 6, 12],
  mulitplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.mulitplyBy);
  }
};

console.log(multiplier.multiply(2));