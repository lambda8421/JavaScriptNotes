const obj1 = {
  test(){
    console.log(this.name)
  },
  name:'name'
};

const obj2 = {
  test:()=>{
    console.log(this.name)
  },
  name:'name'
};

const obj3 = {
  test:function (){
    console.log(this.name)
  },
  name:'name'
};


function Obj4(){
  this.name = 'name';
  this.test = function () {
    console.log(this.name);
    console.log(this)
  }
}

function Obj5(){

  this.name = 'name';
  this.test = ()=> {
    console.log(this.name);
  }
}

obj1.test()
obj2.test()
obj3.test()
let obj4 = new Obj4();
let obj5 = new Obj5();
obj4.test()
obj5.test()
