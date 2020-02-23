function *gen() {
    var value = yield null;
  console.log(value);
    value = yield 1;
    console.log(value);
}

var g = gen();
console.log(g.next());
// "{ value: null, done: false }"
console.log(g.next(2));
console.log(g.next());