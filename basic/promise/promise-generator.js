let p1 = new Promise(r=>r('P1'));
let p2 = new Promise(r=>r('P2'));

combine(function* () {
  try {
    yield p1;
    yield p2;
  }catch (e) {
    //something wrong
  }
});


function combine(generator) {
  let it = generator();

  function handle(itResult) {
    if (itResult.done) return;
    const itValue = itResult.value;
    console.log(itValue);
    if (itValue instanceof Promise){
      itValue.then(res=>handle(it.next(res))
        .catch(err=>it.throw(err)))
    }
  }

  try {
    handle(it.next());
  }catch (e) {
    it.throw(e)
  }
}
