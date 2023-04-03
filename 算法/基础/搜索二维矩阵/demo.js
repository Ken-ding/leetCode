/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 3;
var searchMatrix = function (matrix, target) {
  let l = 0,
    r = matrix.length - 1,
    t;
  while (l <= r) {
    let h = Math.floor((l + r) / 2);
    if (matrix[h][0] === target) return h;
    if (l === r) {
      t = h;
      break;
    }
    if (matrix[h][0] < target) {
      l = h + 1;
    } else {
      r = h;
    }
  }
  let l1 = 0,
    r1 = matrix[t].length - 1;
  while (l1 <= r1) {
    let h1 = Math.floor((l + r) / 2);
    if (matrix[t][h1] === target) return h;
    if (matrix[t][h1] < target) {
      l1 = h1 + 1;
    } else {
      r1 = h1;
    }
  }
};

searchMatrix(matrix, target);
