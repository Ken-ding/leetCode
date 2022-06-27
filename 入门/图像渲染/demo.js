/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 深度优先遍历
let image = [[0,0,0],[0,0,0]],sr = 1, sc = 1, newColor = 2;
 var floodFill = function(image, sr, sc, newColor) {
    //元素的上右下左相邻的坐标
    const d=[[-1,0],[0,1],[1,0],[0,-1]],set=new Set(),oldColor=image[sr][sc];
    function dfs(i,j){
        if(set.has([i,j].toString()))return;
        set.add([i,j].toString())
        if(image[i][j]===oldColor){
            image[i][j]=newColor;
        }else{
            return
        }
        for (const [dx,dy] of d) {
            let x=i+dx,y=j+dy;
            if(image[x]===(void 0)||image[x][y]===(void 0)){
                continue
            }
            dfs(x,y)
        }
    }
    dfs(sr,sc)
};

floodFill(image, sr, sc, newColor)

//广度优先遍历