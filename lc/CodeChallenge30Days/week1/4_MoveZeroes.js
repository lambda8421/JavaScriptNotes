/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = -1;
    for(let i=0; i < nums.length; i++){
        if(nums[i] === 0){
            index = i;
            break;
        }
    }
    if(index === -1) return;
    for(let i=index+1;i < nums.length && index < nums.length;i++){
        if(nums[i] !== 0){
            let num = nums[i];
            nums[i] = nums[index];
            nums[index] = num;
            while(index < nums.length){
                if(nums[index] === 0){
                    break;
                }else{
                    index ++;
                }
            }
        }
    }
};

const arr = [0,1,0,3,12];
moveZeroes(arr);
console.log(arr);