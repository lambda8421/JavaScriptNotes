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
var numIslands = function(grid) {
    if(grid === null || grid.length === 0)return 0;
    const check = new Array(grid.length).fill(0);
    for (let i in check){
        check[i] = new Array(grid[0].length).fill(false);
    }
    let result = 0;
    for(let i=0;i< grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(!check[i][j] && grid[i][j] === '1'){
                result ++;
                dfs(check,grid,i,j);
            }
        }
    }
    return result;
};

function dfs(check,grid,r,c){
    if(r < 0 || r > grid.length-1 || c < 0 || c > grid[0].length - 1) return;
    if(grid[r][c] === '0' || check[r][c]) return;
    if(grid[r][c] === '1' ) {
        check[r][c] = true;
        dfs(check, grid, r + 1, c);
        dfs(check, grid, r - 1, c);
        dfs(check, grid, r, c + 1);
        dfs(check, grid, r, c - 1);
    }
}

// console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]))
console.log(numIslands([["0","1","0"],["1","0","1"],["0","1","0"]]))

/*
["0","1","0"],
["1","0","1"],
["0","1","0"]
 */