let map = new Map();

map.set(1,2)
console.log(map)

for( let i of map){
    console.log(i)
}

function logMapElements(value, key, map) {
  console.log(`m[${key}] = ${value}`);
}

new Map([['foo', 3], ['bar', {}], ['baz', undefined]])
  .forEach(logMapElements);