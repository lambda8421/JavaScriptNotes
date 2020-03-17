const map = new Map();
map.set('arr',[]);

const arr = map.get('arr');
arr.push(1);

console.log(map);

for(let i of map){
  console.log(i);
  console.log(i[0]);
  console.log(i[1]);
}

map.forEach((v,k)=>{
  console.log(v)
  console.log(k)
})
