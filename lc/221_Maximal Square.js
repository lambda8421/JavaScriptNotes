/*
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4

 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let max = 0;
    let dp = new Array(matrix.length + 1).fill(0).map(()=>new Array(matrix[0].length+1).fill(0));
    for(let i=1;i <= matrix.length; i ++){
        for(let j=1;j <= matrix[0].length;j++){
            if (matrix[i-1][j-1] == '1'){
                dp[i][j] = Math.min(Math.min(dp[i-1][j],dp[i][j-1]),dp[i-1][j-1])+1;
                max = Math.max(max, dp[i][j]);
            }
        }
    }
    return max*max;
};



const arr = [
    [1, 0, 1, 0, 0],
    [1, 0,1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0]
];
console.log(maximalSquare(arr));
