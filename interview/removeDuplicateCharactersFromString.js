function removeDuplicates(input){
  //do your magic here
  if(!input) return "x";
  let result = "";
  let set = new Set();
  for(let s of input){
    if(!set.has(s)){
      set.add(s.toLowerCase());
      result += s;
    }
  }
  return result;
}


console.log(removeDuplicates("AbraCadABra Al akAzam"));
console.log(removeDuplicates(""));
console.log(removeDuplicates(null));
console.log(removeDuplicates(undefined));

let arr = Array.from("ddd");
console.log(arr);

console.log("aaa".split(""));