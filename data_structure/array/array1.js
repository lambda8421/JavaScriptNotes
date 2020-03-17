let arr = [];

arr.push(1);
console.log(arr.length);

arr = new Array(2);
console.log(arr.length);
console.log(arr[0]);

arr.push(1);
console.log(arr.length);
arr.pop();
console.log(arr.length);
arr['2'] = 4;
console.log(arr.length);
console.log(arr);
arr.push(1);
console.log(arr);
