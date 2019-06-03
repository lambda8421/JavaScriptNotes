let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

console.log(x,y,z);

/*
解构赋值的拷贝是浅拷贝，即如果一个键的值是复合类型的值（数组、对象、函数）、
那么解构赋值拷贝的是这个值的引用，而不是这个值的副本。
 */

let obj = { a: { b: 1 } };
let { ...obj1 } = obj;
obj.a.b = 2;
console.log(obj1.a.b);

/*
扩展运算符的解构赋值，不能复制继承自原型对象的属性。
 */

let o1 = { a: 1 };
let o2 = { b: 2 };
o2.__proto__ = o1;
let { ...o3 } = o2;
o3 // { b: 2 }
o3.a // undefined