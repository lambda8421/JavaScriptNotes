let x = 1;
z = 3;
console.log(x);
console.log(y);
console.log(z);


var y = 2;

function Ninja() {
  var feints = 0;
  this.getFeints = function(){
    return feints;
  };
  this.feint = function(){
    feints++;
  };
}
var ninja1 = new Ninja();
ninja1.feint();
var imposter = {};
imposter.getFeints = ninja1.getFeints;
//get the access to the ninjia's private variable
console.log(imposter.getFeints());