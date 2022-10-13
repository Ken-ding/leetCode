/**
 * @param {number[][]} grid
 * @return {number}
 */
 grid = [[2,1,1],[0,1,1],[1,0,1]]
var orangesRotting = function(grid) {
    let m = grid.length, n = grid[0].length;
    let queue=[];
    let dist = new Array(m).fill(0).map(() => new Array(n).fill(0));
    let d=[[-1,0],[0,1],[1,0],[0,-1]];
    let target=[];
    const seen = new Array(m).fill(0).map(() => new Array(n).fill(false));
    //把所有的2加入队列
    for (let i = 0; i < grid.length; i++) {
        const elements = grid[i];
        for (let j = 0; j < elements.length; j++) {
            const element = elements[j];
            if(element===2){
                queue.push([i,j])
                seen[i][j]=true
            }
        }
    }

    //广度遍历
    while (queue.length) {
        let [i,j]=queue.shift();
       for (const [dx,dy] of d) {
        let x=i+dx;
        let y=j+dy;
        if(x>=0&&x<m&&y>=0&&y<n&&!seen[x][y]&&grid[x][y]){
            dist[x][y] = dist[i][j] + 1;
            queue.push([x,y])
            seen[x][y] = true;
        }
       }
    }

    return target;
};

orangesRotting(grid)