let  obj = {} // new Object();
let  array = [] // new Array();
function func() {

} // new Function();

array.a = 100;
console.log(array);

let obj1 = new Object();

console.log(obj.__proto__);
console.log(obj1.__proto__.__proto__);
console.log(array.__proto__);
console.log(func.__proto__);

function Foo(name) {
  this.name = name;
}

Foo.prototype.printName  = function () {
  console.log(this.name);
}

let f = new Foo('FOO');
f.printName()