/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 深度优先遍历
let image = [[1,1,1],[1,1,0],[1,0,1]],sr = 1, sc = 1, newColor = 2;
 var floodFill = function(image, sr, sc, newColor) {
    if (image.length === 0) return []
    const w = image.length, h = image[0].length, oldColor = image[sr][sc]
    const d = [[1,0],[0,1],[0,-1],[-1,0]]
    function dfs(i, j) {
        if (image[i][j] !== oldColor || image[i][j] === newColor) return
        image[i][j] = newColor
        for (const [dx, dy] of d) {
            const x = dx + i, y = dy + j
            if (x >= 0 && x < w && y >= 0 && y < h) dfs(x, y)
        }
    }
    dfs(sr, sc)
    return image
};

floodFill(image, sr, sc, newColor)

//广度优先遍历