const obj = {
  get es7() { return 777; },
  get es8() { return 888; }
};
console.log(Object.getOwnPropertyDescriptor(obj, "es7"));
console.log(Object.getOwnPropertyDescriptor(obj, "es8"));

console.log(Object.getOwnPropertyDescriptors(obj));

