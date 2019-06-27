
//copy arr  shallow copy
let arr = [1, 2, 3];
let arr1 = arr.slice();
arr.push(1, 2, 3)
console.log(arr, arr1)

let arr11 = [{ a: 'a' }];
let arr12 = arr.slice();

console.log(arr11, arr12);

arr11[0].a = 'b';

console.log(arr11, arr12);

//copy obj
const target = { a: 1, b: 2 };
const source = { b: { x: 'x' }, c: [1, 2, 3], f: function () { return 1 } };
const returnedTarget = Object.assign(target, source);
source.b = { x: 'y' };
source.c.push('dd')
source.f = function () { return 2 }
console.log(source);
// expected output: Object { a: 1, b: 4, c: 5 }


console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }


//deep copy
let array = [{ a: 'a' }];
let cloneArray = JSON.parse(JSON.stringify(array))

array[0].a = 'ff';

console.log(array,cloneArray)

let obj = {o:{x:'x'}};
let obj1 = JSON.parse(JSON.stringify(obj));
obj.o.x = 'u';

console.log(obj,obj1);
