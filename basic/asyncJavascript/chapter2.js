//PubSub pattern
function Emitter() {
  const map = new Map();
  this.on = function (type,fun) {
    if (map.has(type)){
      map.get(type).push(fun);
    } else {
      const arr = [];
      arr.push(fun);
      map.set(type,arr);
    }
  };

  this.emit = function (type) {
    if (map.has(type)){
      map.get(type).forEach(f=>f());
      const arr = map.get(type);
      for(let key in arr){
        arr[key]();
      }
      for(let value of arr){
        value();
      }
    } else {
      throw Error('no event to emit');
    }
  }
};

const emitter = new Emitter();
emitter.on('evacuate',function () {
  console.log('evacuate2')
});

emitter.on('evacuate',function () {
  console.log('evacuate1')
});
emitter.emit('evacuate');