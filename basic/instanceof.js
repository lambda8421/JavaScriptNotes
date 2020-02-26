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



// defining constructors
function C() {}
function D() {}

let o = new C()

// true, because: Object.getPrototypeOf(o) === C.prototype
o instanceof C

// false, because D.prototype is nowhere in o's prototype chain
o instanceof D

o instanceof Object           // true, because:
C.prototype instanceof Object // true

C.prototype = {}
let o2 = new C()

o2 instanceof C  // true

// false, because C.prototype is nowhere in
// o's prototype chain anymore
o instanceof C

D.prototype = new C()  // add C to [[Prototype]] linkage of D
let o3 = new D()
o3 instanceof D        // true
o3 instanceof C        // true since C.prototype is now in o3's prototype chain


let simpleStr = 'This is a simple string'
let myString  = new String()
let newStr    = new String('String created with constructor')
let myDate    = new Date()
let myObj     = {}
let myNonObj  = Object.create(null)

simpleStr instanceof String  // returns false, string literal is not an object
myString  instanceof String  // returns true
newStr    instanceof String  // returns true
myString  instanceof Object  // returns true

myObj    instanceof Object   // returns true, every object literal has Object.prototype as prototype
  ({})     instanceof Object   // returns true, same case as above
myNonObj instanceof Object   // returns false, prototype is end of prototype chain (null)

myString instanceof Date     // returns false

myDate instanceof Date      // returns true
myDate instanceof Object    // returns true
myDate instanceof String    // returns false
