/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine1 = function (n, k) {
  const ans = [];
  const dfs = (cur, n, k, temp) => {
    // 剪枝：temp 长度加上区间 [cur, n] 的长度小于 k，不可能构造出长度为 k 的 temp
    if (temp.length + (n - cur + 1) < k) {
      return;
    }
    // 记录合法的答案
    if (temp.length == k) {
      ans.push(temp);
      return;
    }
    // 考虑选择当前位置
    dfs(cur + 1, n, k, [...temp, cur]);
    // 考虑不选择当前位置
    dfs(cur + 1, n, k, temp);
  };
  dfs(1, n, k, []);
  return ans;
};

let n = 4,
  k = 2;
var combine1 = function (n, k) {
  const dfs = function (cur, n, k, temp) {
    if (temp.length + (n - cur + 1) < k) {
      return;
    }
    if (temp.length == k) {
      return;
    }
    dfs(cur + 1, n, k, [...temp, cur]);
    dfs(cur + 1, n, k, temp);
  };
  dfs(1, n, k, []);
};

combine1(n, k);
