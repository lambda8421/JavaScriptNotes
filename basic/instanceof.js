/*
 The instanceof operator works on the prototype chain of the object.

 */

function Person(){}
function Ninja(){}
Ninja.prototype = new Person();
const ninja = new Ninja();

console.log(ninja instanceof Ninja);  //true
console.log(ninja instanceof Person);  //true
console.log(ninja instanceof Object);  //true
console.log(ninja instanceof Function); //false


Ninja.prototype = {};

const ninja2 = new Ninja();

console.log(ninja instanceof Ninja); // false
console.log(ninja2 instanceof Ninja); //true


console.log(Object.prototype.toString({}))
