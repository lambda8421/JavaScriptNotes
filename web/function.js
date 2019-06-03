const fun = new Function('a','b','const x = a + b ; return x;');

console.log(fun(1,2));

function* yeildFunc() {
  yield 1;
}

console.log(yeildFunc());
console.log(yeildFunc());

console.log();

(function () {
  console.log('1')
})();