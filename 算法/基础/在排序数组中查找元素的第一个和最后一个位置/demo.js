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
  function binarySearch(nums, target, rule) {
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      let half = Math.floor((left + right) / 2);
      if (rule) {
        if (nums[half - 1] < target) {
          left = half;
          if (nums[half] === target) {
            return half;
          }
        } else {
          right = half;
        }
      } else {
        if (nums[half + 1] > target) {
          right = half;
          if (nums[half] === target) {
            return half;
          }
        } else {
          left = half;
        }
      }
    }

    return -1;
  }
  let leftIndex = binarySearch(nums, target, true);
  let rightIndex = binarySearch(nums, target, false);
  return [leftIndex, rightIndex];
};

searchRange(nums, 8);


