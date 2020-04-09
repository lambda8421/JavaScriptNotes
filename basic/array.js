let grid = [[0,1],[0,1]];
let fGrid1 = new Array(grid.length);
fGrid1 = grid.map(()=>1);



let fGrid = new Array(grid.length).fill(new Array(grid[0].length).fill(false));
console.log(fGrid)