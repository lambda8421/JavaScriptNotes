const obj = {name:'proxy'};
const objProxy = new Proxy(
  obj,
  {
    get:(target,key)=>{
      console.log(target,key);
      return key in target
        ? target[key]
        : "Don't bother the proxy"
    },

    set:(target,  key, value)=> {
      console.log(`writing the ${key} through a proxy`);
      target[key] = value;
    },
  }
);

console.log(obj.name);
console.log(objProxy.name);
console.log(objProxy.nickname);
objProxy.nickname = 'nickname';
console.log(objProxy.nickname);
console.log(obj.nickname);

/*
■ The apply trap will be activated when calling a function, and the construct trap when using the new operator.
■ The get and set traps will be activated when reading/writing to a property.
■ The enumerate trap will be activated for for-in statements.
■ getPrototypeOf and setPrototypeOf will be activated for getting and setting
the prototype value.

 */