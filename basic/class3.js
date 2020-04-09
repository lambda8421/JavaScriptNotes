class Class3{
  constructor() {
    this.map = new Map();
  }

  add = (key,value)=>{
    this.map.set(key,value);
  };

  log = ()=>{
    this.map.forEach((v,k)=>console.log(`key is ${k}, and value is ${v}`));
  }
}

const  c = new Class3();
c.add('c1',10);

c.log();