let nums = [3, 4, 7, 8, 9, 10];
var search = function (nums, target) {
  let l = 0,
    h = nums.length - 1;
  while (l <= h) {
    let i = Math.floor((h - l) / 2 + l);
    let mid = nums[i];
    if (target === mid) {
      return i;
    } else if (target > mid) {
      l = i + 1;
    } else if (target < mid) {
      h = i - 1;
    }
  }
  return -1;
};

search(nums, 8);
