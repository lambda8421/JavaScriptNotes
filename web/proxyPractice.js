//use for logging
function makeLoggable(target){
  return new Proxy(
    target,
    {
      get:(target, key) =>{
        console.log(`reading `, target,key);
        return target[key];
      },
      set:(target,property,value)=>{
        console.log('writing');
        target[property] = value;
      }
    }
  )
}

let obj = {name:'obj'};
obj = makeLoggable(obj);
console.log(obj);

//use for measuring performance

function isPrime(number) {
  if (number < 2) return true;
  for (let i = 0; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

isPrime = new Proxy(isPrime,{
  apply(target, thisArg, argArray) {
    console.log(target,thisArg,argArray)
    console.time('isPrime');
    const result = target.apply(thisArg,argArray);
    console.timeEnd('isPrime');
    return result;
  }
});

isPrime(555557777777777);
isPrime.call({},44444);

//using proxy to autopopulate properties

function Folder() {
  return new Proxy({},{
    get(target, p, receiver) {
      console.log('reading ' + p);
      if (!(p in target)){
        target[p] = new Folder();
      }
      return target[p];
    }
  })
}

const folder = new Folder();

folder.x.y.z = 'test path';


//Using proxies to implement negative array indexes
function navigativeIndexArrayProxy(arr){
  if (!Array.isArray(arr)){
    console.log('NOT AN ARRAY');
    return;
  }

  return new Proxy(arr,
    {
      get(target, index) {
        console.log(typeof index)
        index = +index; //covert to a number
        return target[index < 0 ? target.length + index : index];
      },
      set(target, index, value) {
        index = + index;
        return target[index < 0 ? target.length + index : index] = value;
      }
    })
}

const arr = navigativeIndexArrayProxy(['x','y','z']);
console.log(arr[-1])

//measure the time

function measure(arr) {
  const startTime = new Date().getTime();
  for (let i = 0; i < 5000000; i++) {
    arr[0] = 'xxx';
    arr[1] = 'yyy';
    arr[2] = 'zzz';
  }

  return new Date().getTime() - startTime;
}

const ninjas = ["Yoshi", "Kuma", "Hattori"];
const proxiedNinjas = navigativeIndexArrayProxy(ninjas);
console.log(measure(proxiedNinjas),
  measure(ninjas),
  "Proxies are around", Math.round(measure(proxiedNinjas)/ measure(ninjas)),
  "times slower");