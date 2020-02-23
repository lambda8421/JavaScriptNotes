let hello = async () => { return "Hello" };

console.log(hello());           // Promise { 'Hello' }
console.log(hello().then(x=>console.log(x))); // promise pending

console.log(1); //call before the result of promise