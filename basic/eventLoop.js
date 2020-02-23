const timer = setInterval(()=>{
  clearInterval(timer);
  console.log('after call')
  console.log( timer);
},10);

console.log(timer);