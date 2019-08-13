/*
Find all possible combinations of k numbers that add up to a number n,
given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Note:

    All numbers will be positive integers.
    The solution set must not contain duplicate combinations.

Example 1:

Input: k = 3, n = 7
Output: [[1,2,4]]

Example 2:

Input: k = 3, n = 9
Output: [[1,2,6], [1,3,5], [2,3,4]]
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let results = [];
    backtrack(results, [], k, n, 1)
    return results;
};

function backtrack(results, curArr, k, sum, index) {
    if (curArr.length === k && sum === 0) {
        results.push([...curArr]);
        return;
    }

    for (let i = index; i <= 9; i++) {
        if (sum >= i) {
            curArr.push(i);
            backtrack(results, curArr, k, sum - i, ++index);
            curArr.pop();
        }
    }

}

console.log(combinationSum3(3, 7));
console.log(combinationSum3(3, 9));
