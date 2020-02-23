/*
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  if (p.length > s.length) return [];
  let map = new Map();
  p.split('').forEach(v=>{
    if (map.has(v)){
      map.set(v,map.get(v)+1);
    } else {
      map.set(v,1);
    }
  });
  let counter = map.size;
  let result = [];
  let begin = 0, end = 0;

  while (end < s.length){
    let c = s.charAt(end);
    if (map.has(c)){
      map.set(c,map.get(c)-1);
      if (map.get(c) === 0) counter --;
    }
    end++;
    while (counter === 0){
      let cb = s.charAt(begin);
      if (map.has(cb)){
        map.set(cb,map.get(cb)+1);
        if (map.get(cb) > 0) counter ++;
      }
      if (end - begin === p.length){
        result.push(begin);
      }
      begin ++;
    }
  }
  return result;
};


console.log(findAnagrams('cbaebabacd', 'abc'));

//permutation without duplicate elements
var permutation = function (str) {
  let arr = str.split('');
  let results = [];
  backtrack(results,[],arr);
  return results;
};

var backtrack = function (results,curArr,arr) {
  if (curArr.length === arr.length){
    results.push([...curArr])
  }else {
    for (let i = 0; i < arr.length; i++) {
      if (curArr.indexOf(arr[i]) !== -1) {
        continue;
      }
      curArr.push(arr[i]);
      backtrack(results,curArr,arr);
      curArr.pop();

    }
  }
};

// console.log(permutation('abc'));