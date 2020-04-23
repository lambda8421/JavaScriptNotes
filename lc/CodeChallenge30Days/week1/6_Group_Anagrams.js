/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for(let s of strs){
        const newStr = sortStr(s);
        let arr = [];
        if(map.has(newStr)){
            arr = map.get(newStr);
        }
        arr.push(s);
        map.set(newStr,arr);
    }
    const r = [];
    for(let arr of map.values()){
        r.push(arr);
    }
    return r;
};

function sortStr(str){
    return str.split("").sort().join("");
}