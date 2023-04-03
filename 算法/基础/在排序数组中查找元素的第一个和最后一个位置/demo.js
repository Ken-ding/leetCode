/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let nums = [5, 7, 7, 8, 8, 10];
let target = 4;
var searchRange1 = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    if (nums[left] !== target) left++;
    if (nums[right] !== target) right--;
    if (nums[left] === target && nums[right] === target) break;
  }
  if (left > right) return [-1, -1];
  return [left, right];
};

// searchRange1(nums);

var searchRange = function (nums, target) {
