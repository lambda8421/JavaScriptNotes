/*
Built-in XMLHttpRequest object that offers two events: onload and onerror.
The onload event is triggered when the browser receives a response from the server,
onerror is triggered when an error in communication happens.
These event handlers will be called asynchronously by the browser, as they occur.
 */

let promise = new Promise(res=>res('test'));

promise
  .then(r=>{
    console.log(r);
    return 'then test';
  })
  .then(r=>console.log(r));

/*
waiting for all promise
 */

let p1 = new Promise(r=>setTimeout(
  ()=>r('p1'),500));
let p2 = new Promise(r=>setTimeout(
  ()=>r('p2'),1));

Promise.all([p1,p2]).then(results=>console.log(results));
Promise.race([p1,p2]).then(result=>console.log(result))