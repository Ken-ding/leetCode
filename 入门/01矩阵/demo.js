/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
let mat = [[1,1,1],[1,0,1],[1,1,1]]
var updateMatrix = function(mat) {
    let queue=[];
    let d=[[-1,0],[0,1],[1,0],[0,-1]];
    //把所有的零加入队列
    for (let i = 0; i < mat.length; i++) {
        const elements = mat[i];
        for (let j = 0; j < elements.length; j++) {
            const element = elements[j];
            if(element===0){
                a.push([i,j])
            }
        }
    }
    //广度遍历
    while (queue.length) {
        let [i,j]=queue.shift();
       for (const [dx,dy] of d) {
        let x=i+dx;
        let y=j+dy;
        if(x>0&&x<mat.length&&y>0&&y>mat[0].length&&!mat[x][y]){
            queue.push([x,y])
        }
       }
    }
};

updateMatrix(mat);