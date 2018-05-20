var nameVar = 'Eric';
var nameVar = 'Anthony';
console.log('nameVar', nameVar);

let nameLet = 'Starlee';
nameLet = 'Betty';
console.log('nameLet', nameLet);

const nameConst = 'Potland';
console.log('nameConst', nameConst);

function getPetName() {
  const petName = 'Henry';
  return petName;
}

// block scoping

var fullName = 'Liz Andrade';
let firstName;

if (fullName) {
   firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);