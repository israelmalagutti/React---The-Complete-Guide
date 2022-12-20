// Easily extract array elements or objects properties and store them in variables

// Array destructuring
const [a, b] = ['Hello', 'World']
console.log(a)
console.log(b)

const numbers = [1, 2, 3];
const [num1, ,num3] = numbers

console.log(num1, num3)

// Object Destructuring
const { name } = {
  name: 'Max',
  age: 28,
}

console.log(name)
console.log(age)