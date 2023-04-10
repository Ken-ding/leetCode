/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var matrix = [[1], [3]],
  target = 3;
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) return false;
  let l = 0,
    r = matrix.length - 1,
    t;
  if (matrix.length === 1) {
    t = 0;
  } else {
    while (l <= r) {
      let h = Math.floor((l + r) / 2);
      if (matrix[h][0] === target) return h;
      if (l === r) {
        t = h;
        break;
      }
      if (matrix[h][0] < target && h !== 0) {
        l = h + 1;
      } else {
        r = h;
      }
    }
  }
  let l1 = 0,
    r1 = matrix[t].length - 1;
  if (matrix[t].length === 1) {
    if (matrix[t][0] === target) return true;
    return false;
  }
  while (l1 <= r1) {
    let h1 = Math.floor((l1 + r1) / 2);
    if (matrix[t][h1] === target) return true;
    if (l1 === r1) {
      return false;
    }
    if (matrix[t][h1] < target) {
      l1 = h1 + 1;
    } else {
      r1 = h1;
    }
  }
};

searchMatrix(matrix, target);
