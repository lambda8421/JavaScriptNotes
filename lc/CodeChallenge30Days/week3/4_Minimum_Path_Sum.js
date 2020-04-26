/*
Given a m x n grid filled with non-negative numbers,
find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if (grid === null || grid.length === 0) return 0;
  const r = grid.length;
  const c = grid[0].length;
  const dp = new Array(r).fill(0);
  for (let i in dp){
    dp[i] = new Array(c).fill(0);
  }

  for (let i in grid){
    for (let j in grid[i]){
      if (i > 0 && j > 0){
        dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j];
      }else if (i > 0){
        dp[i][j] =dp[i-1][j] + grid[i][j];
      } else if (j > 0){
        dp[i][j] =dp[i][j-1] + grid[i][j];
      }else {
        dp[i][j] = grid[i][j];
      }
    }
  }

  return dp[r-1][c-1];
};

console.log(minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]));