function Super(){

}

Super.prototype.super = function () {
  console.log('super')
}

function Sub() {

}

Sub.prototype = new Super();

const sub = new Sub();
sub.super();