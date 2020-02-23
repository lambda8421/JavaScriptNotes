/*
Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:

Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.

Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.

 */

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  if(n === 0 || n === 1) return n;
  let dp = new Array(n+1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  for (let i = 1; i <= n ; i ++){
    let j = 1;
    let min = Number.MAX_VALUE;
    while (i - j*j >= 0){
      min = Math.min(dp[i - j*j] + 1,min);
      j++;
    }
    dp[i] = min;
  }
  return dp[n];
};

console.log(numSquares(13));
console.log(numSquares(12));

