const funArr1 = function (a,b) {
  return a + b;
};

console.log(funArr1(...[1,2]));

const funArr2 = function (...arr) {
  return arr.reduce((v,cur)=>v+cur,100);
};

console.log(funArr2(1,2,3));


const funObj = function ({a,...params}) {
  console.log(a);
  console.log(params);
  return a + params.b;
};

const obj = {a:1,b:2};
console.log(funObj(obj));

const {a,b} =obj;

console.log(a)