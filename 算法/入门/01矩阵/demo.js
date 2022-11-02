/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
let mat = [[0,1,1],[1,0,1],[1,1,0]]
var updateMatrix = function(mat) {
    let m = mat.length, n = mat[0].length;
    let queue=[];
    let dist = new Array(m).fill(0).map(() => new Array(n).fill(0));
    let d=[[-1,0],[0,1],[1,0],[0,-1]];
    const seen = new Array(m).fill(0).map(() => new Array(n).fill(false));
    //把所有的零加入队列
    for (let i = 0; i < mat.length; i++) {
        const elements = mat[i];
        for (let j = 0; j < elements.length; j++) {
            const element = elements[j];
            if(element===0){
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
        if(x>=0&&x<m&&y>=0&&y<n&&!seen[x][y]){
            dist[x][y] = dist[i][j] + 1;
            queue.push([x,y])
            seen[x][y] = true;
        }
       }
    }

    return dist;
};

updateMatrix(mat);