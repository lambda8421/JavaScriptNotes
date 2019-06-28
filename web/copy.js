
//copy arr  shallow copy
let arr = [1, 2, 3];
let arr1 = arr.slice();
console.log(arr, arr1);

let arr11 = [{ a: 'a' }];
let arr12 = arr11.slice();

arr11[0].a = 'b';

console.log(arr11, arr12);

//copy obj  shallow copy
const source = {
  b: { x: 'x' },
  c: [1, 2],
  f: function () { return 1 } };
const returnedTarget = Object.assign({}, source);
console.log(returnedTarget);


source.b.x = 'y';
source.c.push('dd');
source.f = function () { return 2 };  //refer to another
console.log(source);
console.log(returnedTarget);

console.log(source.f(),returnedTarget.f());

