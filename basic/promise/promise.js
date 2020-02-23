// let p = new Promise(r=>{
//   console.log(1);
//   r('r')
// }).then(r=>{
//   console.log(2);
//   return r+r;
// });
//
// p.then(r=>console.log(r));

// let p2 = new Promise(resolve=>{
//   console.log(1);
//   setTimeout(()=>resolve('t'),1000);
// }).then(r=>{
//   console.log(2);
//   return r+r;
// });
//
// let p3 = new  Promise(res=>res('p3')).then(r=>r+r+r).then(r=>r+'1111');
//
// let queue = [];
// queue.push(p2,p3);
//
// queue.forEach(p=>p.then(r=>console.log(r)));


// let p4 = new Promise(function(res, rej) {
//   res("aaa");
//   console.log('res p4 aaa')
// }).then(function(result) {
//   console.log('res p4 bbb');
//   return "p4 bbb";
//   }).then(function(result) {
//     console.log(result);
//     return 'p4 result'
//   });
//
// p4.then(res=>console.log(res));
//
// let p5 = new Promise(function(res, rej) {
//   res("aaa");
//   console.log('res p5 aaa')
// }).then(function(result) {
//     return Promise.resolve("p5 bbb");
//   }).then(function(result) {
//     console.log(result);
//   });
// p5.then(res=>console.log(res));

let p6 = new Promise(resolve => resolve('resolve'));


p6.then(x=>console.log(x));

console.log(p6);
