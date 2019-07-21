let hello = async () => { return "Hello" };
hello().then(x=>console.log(x));


let hello1 = async () => { return Promise.resolve('Hello1')};


async function f() {
  let h1 = await hello();
  let h2 = await hello1();
  return h1 + " " +  h2;
}

f().then(x=>console.log(x));


