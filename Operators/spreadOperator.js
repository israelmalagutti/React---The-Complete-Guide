//  Used to split up array elements OR object properties

// Array demonstration
const array = [1, 2, 3];
const newArray = [ ...array, 4, 5];

console.log(newArray);

// Object demonstration
const job = {
  company: '7 billion humanitarian',
  wage: 5980.00,
};

const person1 = {
  name: 'Jhon',
  lastName: 'Doe',
  age: 36,
  job,
};

const person2 = {
  name: 'Jane',
  lastName: 'Doe',
  age: 32,
  ...job,
};

console.log(person);
