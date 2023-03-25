/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let nums = [1, 3];
target = 3;
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  if (nums.length === 0) return -1;
  if (nums.length === 1 && nums[0] === target) return 0;
  while (left <= right) {
    let half = Math.floor((left + right) / 2);
    if (nums[half] === target) return half;
    if (left === right && nums[left] !== target) return -1;
    if (nums[left] < nums[half]) {
      if (nums[left] <= target && nums[half] >= target) {
        right = half;
      } else {
        left = half + 1;
      }
    } else {
      if (nums[half + 1] <= target && nums[right] >= target) {
        left = half + 1;
      } else {
        right = half;
      }
    }
  }
};

search(nums, target);