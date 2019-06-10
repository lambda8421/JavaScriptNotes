/*
  1. direct called as a function
  this represent the context where function get called
 */

//window.test = 'test';
global.test = 'test';
function directCallFunc(){
  console.log(this.test);  //window or global
}


directCallFunc();

function Animal() {
  this.name = "Animal";
  this.showName = function() {
    console.log(this.name);
  }
}

const a = new Animal();
a.showName();
const func1 = a.showName;
func1(); //undefined cause func1 is direct call within window/global env

/*
  2 called with new keyword
 */
console.log('called with new keyword function-------');

function Obj() {
  this.test = 'test';
  console.log(this);
}

const obj = new Obj();
console.assert(obj.test === 'test','This');

/*
  3.called as method inside obj


  //Arrow functions pick up the value of the this parameter
  at the moment of their creation.

  Arrow functions don't have their own context.
  Instead, the context is inherited from the function in which they’re defined.

 */

let obj1 = {
  test:'testInsideObj',
  func: function () {
    console.log(this.test)
  },
  arrFunc: ()=>console.log(this.test)
};
obj1.func(); //like bind the function to obj1
obj1.arrFunc();


/*
  4. call with apply or call
 */
console.log('apply obj to function-------');



function calledWithApply(...arr){
  console.log(this.app);
  console.log(arr);
  return arr.reduce((v,c)=>v+c);
}

console.log(calledWithApply.apply({app:'Apply'},[1,2,3]));
console.log(calledWithApply.call({app:'Apply'},1,2,3));

/*
  5.bind obj to function
 */
console.log('bind obj to function-------');

function bindFunc() {
  console.log(this.bindTest);
}

let bindObj = {
  bindTest:'BindTest'
};
const bFunc = bindFunc.bind(bindObj);
bFunc();


