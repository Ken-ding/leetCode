let s = "a1b2";
var letterCasePermutation1 = function (s) {
  const ans = [],
    n = s.length;
  function dfs(i, tmp) {
    if (i === n) return ans.push(tmp);
    if (isNaN(s[i])) {
      dfs(i + 1, tmp + s[i].toLowerCase());
      dfs(i + 1, tmp + s[i].toUpperCase());
    } else {
      dfs(i + 1, tmp + s[i]);
    }
  }
  dfs(0, "");
  return ans;
};

function letterCasePermutation(s) {
  const ans = [];
  n = s.length;
  function dfs(i, tmp) {
    if (i === n) return ans.push(tmp);
    if (isNaN(s[i])) {
      dfs(i + 1, tmp + s[i].toLowerCase());
      dfs(i + 1, tmp + s[i].toUpperCase());
    } else {
      dfs(i + 1, tmp + s[i]);
    }
  }
  dfs(0, "");
}

letterCasePermutation(s);
