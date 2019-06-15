/*
 The instanceof operator works on the prototype chain of the object.

 */

function Person(){}
function Ninja(){}
Ninja.prototype = new Person();
const ninja = new Ninja();

console.log(ninja instanceof Ninja)
console.log(ninja instanceof Person)

Ninja.prototype = {};

const ninja2 = new Ninja();

console.log(ninja instanceof Ninja);
console.log(ninja2 instanceof Ninja);