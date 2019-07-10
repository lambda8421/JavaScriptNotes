/*

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.

*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function dfs(m,t,row,col){
    if(row < 0 || col < 0 || row > m.length-1 || col > m[0].length-1) return false;
    else if(m[row][col] === t) return true;
    else if(m[row][col] < t) return dfs(m,t,row+1,col)
    else  return dfs(m,t,row,col-1);
}

var searchMatrix = function(matrix, target) {
    if(matrix.length === 0) return false;
    return dfs(matrix,target,0,matrix[0].length-1);
};

var matrix = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ];

console.log(searchMatrix(matrix,5))
console.log(searchMatrix(matrix,20))
console.log(searchMatrix(matrix,19))
console.log(searchMatrix(matrix,16))