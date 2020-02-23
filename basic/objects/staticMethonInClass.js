
function Ninja(){}
Ninja.compare = function(ninja1, ninja2){
  console.log('compare')
}

const ninja = new Ninja();


//ES6
class StaticMethod{
  constructor(name){
    this.name = name;
  }

  normalMethod(){
    console.log('normal')
  }

  static staticMethod(){
    console.log('staticMethod');
  }
}