function argsFunc(a,b,c){
  const arr = arguments;
  console.log(arguments);
}


const arrFunc = (a,b,c)=>console.log(arguments);

argsFunc(1,2,3,4);
arrFunc();

let arr = [1,2,3];
function add(arr) {
  arr.push(3);
}
add(arr);
console.log(arr);