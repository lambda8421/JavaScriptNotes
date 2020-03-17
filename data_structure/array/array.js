const arr = [];

arr.push('tail');
arr.unshift('head');

console.log(arr);


arr.pop();
arr.shift();

console.log(arr);

arr.push('x','y');

console.log(arr);

const reducer = (preV,curV)=>preV + curV;
const str = arr.reduce(
  reducer
);

console.log(str);

arr.push('z','z1','z2');
arr.splice(1,1);

console.log(arr);

arr.splice(1,1,'yyyyy');
console.log(arr);

/* return iterator here */
let it = arr.entries();
console.log(it.next());