

function f(x){

  console.log(x)
}

const ar = new Array(1);
console.log(ar[0])
ar.length = 2;
ar.push(2);
ar.push(0)
for(const i in ar){
  console.log(i,ar[i])
  // f(i);
  // f(ar[i])
}

console.log(JSON.stringify({x: [1,2]}));

let x = 0;
console.log(Number.MAX_VALUE);


function f1(a,b) {
  console.log(b);
}

f1(1)

const arr = [2,1]
arr.sort();
console.log(arr)
