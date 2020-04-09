/*
In a given grid, each cell can have one of three values:

    the value 0 representing an empty cell;
    the value 1 representing a fresh orange;
    the value 2 representing a rotten orange.

Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.



Example 1:

Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:

Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:

Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.



Note:

    1 <= grid.length <= 10
    1 <= grid[0].length <= 10
    grid[i][j] is only 0, 1, or 2.

 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let max = grid.length * grid[0].length ;
  let result = 0;
  let fGrid = new Array(grid.length).fill(0);
  for(let i=0; i < fGrid.length; i++){
    fGrid[i] = new Array(grid[0].length).fill(false);
  }
  for(;result <= max; result++){
    if(checkIfDone(grid)) break;
    for(let i=0; i < grid.length; i++){
      for(let j=0; j < grid[0].length; j++){
        if(grid[i][j] === 2){
          fGrid[i][j] = true;
        }
      }
    }

    for(let i=0; i < grid.length; i++){
      for(let j=0; j < grid[0].length; j++){
        dfs(fGrid,grid,i,j);
      }
    }
  }

  if(checkIfDone(grid)){
    return result;
  }else{
    return -1;
  }
};

function dfs(fGrid,grid,row,col){
  if(grid[row][col] === 2 && fGrid[row][col]){
    if(row +1 <  grid.length && grid[row+1][col] === 1){
      grid[row+1][col] = 2;
    }

    if(row -1 >= 0 && grid[row-1][col] === 1){
      grid[row-1][col] = 2;
    }

    if(col +1 <  grid[0].length && grid[row][col+1] === 1){
      grid[row][col+1] = 2;
    }

    if(col - 1 >= 0 && grid[row][col-1] === 1){
      grid[row][col-1] = 2;
    }

  }

}

function checkIfDone(grid){
  for(let row of grid){
    for(let v of row){
      if(v === 1){
        return false;
      }
    }
  }
  return true;
}

const arr1 = [[2,1,1],[0,1,1],[1,0,1]];
const arr = [[2,1,1],[1,1,0],[0,1,1]];
const arr2 = [[2,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,0,1],[1,0,0,0,0,0,0,1,0,1],[1,0,1,1,1,1,0,1,0,1],[1,0,1,0,0,1,0,1,0,1],[1,0,1,0,0,0,0,1,0,1],[1,0,1,1,1,1,1,1,0,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1]];
console.log(orangesRotting(arr2));
// console.log(orangesRotting(arr1));