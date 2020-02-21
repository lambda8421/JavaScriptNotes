let arr = new Array(1,2,3,4,5);
console.log(arr);



arr = new Array(1);
console.log(arr);

arr.push(1,2,3,4);

for(let i in arr){
    // arr[i] = arr[i] ++; // this would increase element value of array
    arr[i] = ++arr[i];
}

console.log(arr);
arr.log

let str = 'hello world';
let strArr = str.split('');
console.log(strArr)

str = strArr.join(' ');
console.log(str)

str = strArr.toString();
console.log(str);

let firstIndex = strArr.indexOf('h');
let lastIndex = strArr.lastIndexOf('l');

console.log(firstIndex,lastIndex)

if([] && {} && ''){
    console.log('[]')
}

let arr1 = ['x','y','z'];
let arr2 = ['a','b','c'];
let newArr = arr1.concat(arr2);
console.log(newArr);

//unshift  splice push (add action)
// shift splice pop (remove action)

arr = ['x','y'];
arr.push('z');
console.log(arr) //x,y,z
arr.unshift('mmm');
console.log(arr) //mmm,x,y,z
arr.splice(1,0,'xxx')
console.log(arr) //mmm,xxx,x,y,z
arr.splice(1,1)
console.log(arr) //mmm,x,y,z
arr.pop();
console.log(arr) //mmm,x,y
arr.shift();
console.log(arr) //x,y

arr = [4,1,5,6];
arr.reverse();
console.log(arr);
arr.sort()
console.log(arr);

const c = (c1,c2)=>c1-c2;
const rc = (c1,c2)=>c2-c1;
arr.sort(rc);
console.log(arr)

//forEach every some

const forEach = x=>console.log("For Each " + x);
const every = x=>x>1;
const some = x=>x>1;

arr.forEach(forEach);
console.log(arr.every(every));
console.log(arr.some(some));

//reduce

const reducer = (pre,cur) => pre + cur;
console.log(arr.reduce(reducer));
console.log(arr.reduce(reducer,1));

//return new arr function
// map, filter
const mapArr = arr.map(x=>x*2);
console.log(mapArr);
const filterMap = arr.filter(x=>x>3);
console.log(filterMap);

let a = 1;
let b = a++;
console.log(a,b);


/*
The Array.from() method creates a new,
shallow-copied Array instance from an array-like or iterable object.
*/
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]


const ar1r = [[1,2],[3,4]];
console.log(ar1r);

const x = ar1r[0].splice(0,1);
console.log(ar1r);
