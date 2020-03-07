var isAnagram = function(s, t) {

  const map = new Map();
  for(let i  of s){
    if(map.has(i)){
      map.set(i,map.get(i) + 1);
    }else{
      map.set(i,1);
    }
  }

  for(let i of t){
    if(map.has(i)){
      map.set(i,map.get(i) - 1);
    }else{
      return false;
    }
  }
  for(let i of map){
    if(i[1] !== 0){
      return false;
    }
  }
  return true;
};

console.log(isAnagram('ab', 'a'));


console.log('bcd'.split('').sort().join(''));

