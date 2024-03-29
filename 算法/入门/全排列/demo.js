/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// let nums = [1, 2, 3];
var permute1 = function (nums) {
  // 保存最终的结果
  const res = [];
  // 用来记录每一步排列中，数字是否已经使用
  const used = new Array(nums.length).fill(false);
  function dfs(nums, index, p) {
    const len = nums.length;
    if (len === index) {
      res.push(p);
      return;
    }
    for (let i = 0; i < len; i++) {
      if (!used[i]) {
        p.push(nums[i]);
        used[i] = true;
        const p1 = [...p];
        dfs(nums, index + 1, p1);
        // 这一轮使用后，回溯，下一轮还可以使用
        p.pop();

        used[i] = false;
      }
    }
    return;
  }
  dfs(nums, 0, []);
  return res;
};

// permute1(nums);

let nums = [1, 2, 3,4];
function permute(nums) {
  let l=nums.length;
  function dfs(nums,i) {
    if(i===l)return;
    console.log(nums[i]);
    dfs(nums,i+1)
  }
  dfs(nums,0)
}

permute(nums)

