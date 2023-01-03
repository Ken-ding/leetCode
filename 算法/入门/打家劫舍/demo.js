/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [1, 2, 3, 1];
var rob = function (nums) {
  let i = nums.length;
  if (i === 0) return 0;
  let dp = [];
  dp[0] = nums[0];
  dp[1] = max(nums[0], nums[1]);
  dp[i] = max(dp[i - 1], nums[i] + dp[i - 2]);
};
