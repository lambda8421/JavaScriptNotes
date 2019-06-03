let store = {
  id:1,
  cache:{},
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

function ninja(){}
function ninja1(){}
store.add(ninja);
store.add(ninja1);
store.add(ninja);

console.log(store);