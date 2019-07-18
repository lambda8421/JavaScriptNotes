/*
 You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. 
 Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.

Find out how many ways to assign symbols to make sum of integers equal to target S.

Example 1:

Input: nums is [1, 1, 1, 1, 1], S is 3.
Output: 5
Explanation:

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

There are 5 ways to assign symbols to make the sum of nums be target 3.

Note:

    The length of the given array is positive and will not exceed 20.
    The sum of elements in the given array will not exceed 1000.
    Your output answer is guaranteed to be fitted in a 32-bit integer.

*/

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
    let sum = nums.reduce((p,c)=>p+c);
    return sum >= S && (S+sum)%2 === 0 && findSubSet(nums,(S + sum)/2)
};

var findSubSet = function (nums,target){
    const matrix = new Array(target + 1).fill(0).map(() => new Array(nums.length).fill(false));
    matrix[0] = new Array(nums.length).fill(true);
    for(let i = 1;i <= target; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[j] > target){
                matrix[i][j] =  matrix[i][j-1]
            }else{
                matrix[i][j] = matrix[i-1][j] || matrix[i - nums[j-1]][j-1];
            }
        }
    }
    return matrix[target][nums.length-1];

}
console.log(findTargetSumWays([1, 1, 1, 1, 1],3))
console.log(findTargetSumWays([1],2))
console.log(findTargetSumWays([1, 2, 7, 9, 981],1000000000))
const x = new Array(2).fill(0).map(() => new Array(3 + 1).fill(0));
console.log(x)