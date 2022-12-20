// Used in functions
// Used to merge a list of functions into an array

function sortArgs(...args) {
  return args.sort()
}

console.log(sortArgs([1, 8, 2, 5, 3]))

const filter = (...args) => {
  return args.filter(el => el === 1)
}

console.log(filter(1, 2, 3))
