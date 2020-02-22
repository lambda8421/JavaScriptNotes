/*
A closure allows a function to access and manipulate variables
that are external to that function.

Closures allow a function to access all the variables,
as well as other functions, that are in scope when the function itself is defined.

 */

let outerVariable = 'outerVariable';
let laterFunc  = null;

function outerFunc() {
  const innerVariable = 'InnerVariable';
  function innerFunc() {
    console.log(outerVariable);
    console.log(innerVariable);
  }

  laterFunc = innerFunc;
}

outerFunc();
laterFunc();

/*
Mimicking private variables
 */

function Obj() {
  let values = 1;
  this.getValue = function () {
    return values;
  };

  this.value = function () {
    console.log('etest');
    console.log(this.value)
    values ++;
  }
}

const obj = new Obj();
obj.value();
console.log(obj.values);
console.log(obj.getValue());