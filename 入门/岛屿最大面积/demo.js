/**
 * @param {number[][]} grid
 * @return {number}
 */
let grid = [[0,1],[1,1]]
 var maxAreaOfIsland = function(grid) {
    //上右下左
    let d=[[0,1],[1,0],[0,-1],[-1,0]],num=0,max=[],m=grid.length,n=grid[0].length;

    for (let i = 0; i < grid.length; i++) {
        const element = grid[i];
        for (let j = 0; j < element.length; j++) {
            const value = element[j];
            dbs(i,j,value)
            if(num){
                max.push(num);
                num=0;
            };
        }
    }

    function dbs(a,b,val) {
        console.log([a,b,val]);
        if(val===0){
            return
        }else{
            num+=val;
            grid[a][b]=0;
        };
        for (const [dx,dy] of d) {
            let x=dx+a,y=dy+b;
            if(x>=0&&y>=0&&x<m&&y<n)dbs(x,y,grid[x][y])
        }
    }
    if(max.length==0)return 0;
    return Math.max(...max);
};

maxAreaOfIsland(grid)
