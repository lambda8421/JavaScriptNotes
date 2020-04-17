function ff() {
    return  1;
}
ff();
/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

function maxSubArray(nums) {
    if(nums.length === 1) return nums[0];
    let max = - Number.MAX_VALUE;
    let i=0, j = 0;
    let total = 0;
    for(; j < nums.length; j++){
        const num = nums[j];
        total += num;
        max = total > max ? total : max;
        if(total < 0){
            while(i < j && total < 0){
                total -= nums[i];
                max = total > max ? total : max;
                i++;
            }
        }else{
            total += num;
        }
    }
    return max;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);