// Reference 
const number = 1
const num2 = number // makes a copy of number

console.log(num2)

// Objects and array = Reference
const person = {
    name: 'Israel',
};

const secondPerson1 = person; // Stores a pointer to the object person, but doesnt copy it
person.name = "Max";


console.log(secondPerson1);

// Use the spread operator to actually copy the person object
const secondPerson2 = {
    ...person
};

person.name = "Max";

console.log(secondPerson2);