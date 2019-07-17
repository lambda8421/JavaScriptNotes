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
    for(int i=0;i < matrix.length; i ++){
        for(let j=0;j < matrix[0].length;j++){
            max = Math.max(square(matrix,i,j),max);
        }
    }
    return max;
};

var square(matrix,row,col){

}
