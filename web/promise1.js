const promiseE1 = new Promise((res,rej)=>{
  // res('test');
  rej('rej')
});

promiseE1.then((x)=>console.log(x),
    e=>console.log(e));

promiseE1.then((x)=>console.log(x))
  .catch(e=>console.log(e));

const throwErrorPromise = new Promise((res,rej)=>{
  x++;
});

throwErrorPromise.catch(e=>console.log(e));
/*
  immediate promise and time-consuming promise
 */

/*
console.log('-----code start ----');

const pA = new Promise(res=>{
  console.log('time consuming promise');
  setTimeout(()=>res('Time consuming result get back'),500);
});

pA.then(res=>console.log(res));

const pB = new Promise(res=>{
  console.log('Immediate promise');
  res('Immediate promise result get back');
});

pB.then(res=>console.log(res));


console.log('-----code end ----');

 */