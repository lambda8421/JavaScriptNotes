function Super(){

}

Super.prototype.super = function () {
  console.log('super')
}

function Sub() {

}

Sub.prototype = Super;

const sub = new Sub();
sub.super();

function A(){}
A.constructor = Super;
let a = new A();
