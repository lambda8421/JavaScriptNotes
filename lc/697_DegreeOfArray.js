var findShortestSubArray = function(nums) {
  const map = new Map();
  for(let i=0; i < nums.length; i++){
    const n = nums[i];
    if(map.has(n)){
      let arr = map.get(n);
      arr[1] = i;
      arr[2] += 1;
    }else{
      map.set(n,[i,i,1]);
    }
  }
  let max = 0;
  for(let v of map){
    if(max < v[1][2]){
      max = v[1][2];
    }
  }
  let min = nums.length;
  for(let v of map){
    if(max === v[1][2]){
      let value = v[1][1] - v[1][0] + 1;
      if(min > value){
        min = value;
      }
    }
  }


  return min;
};

console.log(findShortestSubArray([1, 2, 2, 3, 1]));
