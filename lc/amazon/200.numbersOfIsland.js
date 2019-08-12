/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == '1'){
        marking(grid,i,j);
        count ++;
      }
    }
  }
  return count;
};

function marking(grid,i,j) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] == '0') return;
  grid[i][j] = '0';
  marking(grid,i+1,j);
  marking(grid,i-1,j);
  marking(grid,i,j+1);
  marking(grid,i,j-1);
}

var grid1 = [[1,1,1,1,0],
  [1,1,0,1,0],
  [1,1,0,0,0],
  [0,0,0,0,0]
];

var grid2 = [[1,1,0,0,0],
  [1,1,0,0,0],
  [0,0,1,0,0],
  [0,0,0,1,1]
];

console.log(numIslands(grid1));
console.log(numIslands(grid2));