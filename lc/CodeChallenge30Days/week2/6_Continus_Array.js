/*
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Note: The length of the given binary array will not exceed 50,000.

 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let max = 0, sum = 0;
    const map = new Map();
    map.set(0,-1);
    for(let i=0;i < nums.length; i++){
        if(nums[0] === 0){
            sum--;
        }else{
            sum ++;
        }
        if(map.has(sum)){
            max = Math.max(max,i - map.get(sum));
        }else{
            map.set(sum,i);
        }
    }
    return max;
};

findMaxLength([0,1]);
findMaxLength([0,1,0,1]);