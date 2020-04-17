const obj = {
  get es7() { return 777; },
  get es8() { return 888; }
};
console.log(Object.getOwnPropertyDescriptor(obj, "es7"));
console.log(Object.getOwnPropertyDescriptor(obj, "es8"));

console.log(Object.getOwnPropertyDescriptors(obj));


let value = "global"
let obj1 = {
  value:'value',
  get:function () {
    return this.value;
  },
  get1:()=>{
    const value = "dddd";
    return this.value;
  }
}

console.log(obj1.get());
console.log(obj1.get1());

