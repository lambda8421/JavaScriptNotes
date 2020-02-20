/*
The filter() method creates a new array with all elements
that pass the test implemented by the provided function.
 */

// let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
