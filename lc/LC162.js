//162. Find Peak Element
/*

A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 1 or 5 
Explanation: Your function can return either index number 1 where the peak element is 2, 
             or index number 5 where the peak element is 6.
Note:

Your solution should be in logarithmic complexity.

*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length === 0) return -1;
    if(nums.length === 1) return 0;
    if(nums.length === 2) return nums[0] > nums[1] ? 0 : 1;
    
    var f = 0;
    var m = 1;
    for(var l = 2; l < nums.length; l ++){
        if(nums[m] > nums[l] && nums[m] > nums[f]){
            return m;
        }else{
            f++;
            m++;
        }
    }
    if(nums[0] > nums[1]){
        return 0;
    }else if(nums[nums.length -1] > nums[nums.length-2]){
        return nums.length - 1;
    }
    
    return -1;
};

/*
Logaritmic solution 

binary search  (template)
*/

function findPeakElement(nums) {
    var left = 0, right = nums.length, mid;
    if(nums.length == 1)
        return 0;
    while(left < right){
        mid = Math.floor(left + (right - left) / 2);
        console.log("mid:" + mid);
        if(mid == nums.length - 1)
            return nums[mid] > nums[mid-1] ? mid : mid - 1;
        if(nums[mid] < nums[mid+1])
            left = mid + 1;
        else
            right = mid;
    }
    return left;
}

var x = 2;
var y = 3;

console.log((x+y)/2)