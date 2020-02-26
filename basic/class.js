class C1{
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

   log(){
    console.log('ffff')
  }
}

class C2 extends C1{
}

class C3 extends C1{
}

function f(){}

let c1= new C1(1,2);
console.log(c1)
c1.log()