function* generator() {
  yield 'x';
  yield 'y';
  yield 'z';
}


for (let value of generator()){
  console.log(value);
}

const it = generator();
console.log(it.next());