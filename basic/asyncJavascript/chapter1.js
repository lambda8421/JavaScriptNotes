function f() {
  console.log(i)
  console.log(x)

  var i = 1;
  var x = 2;
}

f()

// timeout parameter can't make sure the function call back as it set
// those two examples have different result if you run a few times

//if we put two setTimeouts interval more than 4ms, the result should be
//in order cause there is a 4ms interval for setTimeout and setInterval
let start = new Date();
setTimeout(function () {
  let end = new Date();
  console.log(end - start);
},2);

setTimeout(function () {
  console.log('xx')
},1);



// while (new Date() - start < 1000){}



//When a user clicks a DOM element with a click handler attached,
// a click event is queued.
// But the handler won’t be executed until all currently running code
// has finished

var obj = {};
x = 'x';
y = 'y';
obj[x](y);
console.log(obj)