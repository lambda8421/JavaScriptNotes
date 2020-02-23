/*
Given a sorted integer array without duplicates, return the summary of its ranges.

Example 1:

Input:  [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.

Example 2:

Input:  [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.

*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if(nums.length === 0) return [];
    if (nums.length === 1) return new Array(1).fill(nums[0].toString());
    let results = [];
    let fNum = nums[0], sNum = nums[0];
    for(let i = 1 ; i < nums.length; i++){
        if(sNum +1 === nums[i]){
            sNum = nums[i];
        }else{
            let curStr = fNum === sNum ? fNum.toString() : `${fNum}->${sNum}`;
            results.push(curStr);
            fNum = sNum = nums[i];
        }
    }
    fNum === sNum ? results.push(fNum.toString()) : results.push(`${fNum}->${sNum}`);
    return results;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
console.log(summaryRanges([0, 2, 4, 5, 6, 8, 9]));
