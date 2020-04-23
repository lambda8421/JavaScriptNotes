/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = new Map();
    for(let n of nums){
        if(map.has(n)){
            map.set(n,map.get(n)+1);
        }else{
            map.set(n,1);
        }
    }
    let result = 0;
    map.forEach((v,k)=>{
        if(v === 1){
            result = k;
        }
    })
    return result;
};

//follow up XOR

let singleNumberXOR = function (nums) {
    let r = 0;
    for(let i of nums){
        r ^= i;
    }
    return r;
}

