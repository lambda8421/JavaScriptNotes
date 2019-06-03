function add(a,b,c){
  console.log(a,b,c);
  return a+b
}
let plus5=add.bind(null,5,6);
console.log(plus5(6));


add.call(this,...[1,2,3]);

let arr = [3,2,5,1,7];

arr.sort((x,y)=>x-y);

console.log(arr)

var obj = {};

var fun = function () {
}

console.log(obj.prototype);
console.log(fun.prototype)

