/*
Given an array which consists of non-negative integers and an integer m, 
you can split the array into m non-empty continuous subarrays. Write an algorithm to minimize the largest sum among these m subarrays.

Note:
If n is the length of array, assume the following constraints are satisfied:

1 ≤ n ≤ 1000
1 ≤ m ≤ min(50, n)
Examples:

Input:
nums = [7,2,5,10,8]
m = 2

Output:
18

Explanation:
There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8],
where the largest sum among the two subarrays is only 18.
*/


/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */

 // binary search solution
var splitArray = function(nums, m) {
    //find max and sum
    let max = 0, sum = 0;
    nums.forEach(x=>{
        max = max > x ? max : x;
        sum += x;
    });
    return binarySearch(max,sum,nums,m)
};

function binarySearch(low,high,nums,m){
    let mid = 0;
    while(low < high){
        mid = Math.floor((low + high)/2);
        if(valid(nums,m,mid)){
            high = mid;
        }else{
            low = mid+1;
        }
    }
    return high;
}

function valid(nums, m,target){
    let count = 1;
    let cur = 0;
    for (let n of nums){
        if ((n + cur) > target){
            cur = n;
            count ++;
            if (count > m) return false;
        }  else {
            cur += n;
        }
    }
    return  true;
}

console.log(splitArray([7,2,5,10,8],2));