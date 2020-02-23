let store = {
  id:1,
  cache:{},
  log:()=>{console.log(this)},
  add:function (element) {
    if (!element.id){
      element.id = this.id ++;
      this.cache[element.id] = element;
      return true;
    }else {
      return false;
    }
  }
};

function ninja(){}
function ninja1(){}
store.add(ninja);
store.add(ninja1);
store.add(ninja);

console.log(store);
console.log(ninja);

// not working with arrow function
let store1 = {
  id:1,
  cache:{},
  log:()=>{console.log(this)},
  add:element=> {
    if (!element.id){
      element.id = this.id ++;
      this.cache[element.id] = element;
      return true;
    }else {
      return false;
    }
  }
};




