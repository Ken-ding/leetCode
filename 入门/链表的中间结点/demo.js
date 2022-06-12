/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var middleNode = function (head) {
  n = 0;
  cur = head;
  while (cur != null) {
    ++n;
    cur = cur.next;
  }
  k = 0;
  cur = head;
  while (k < Math.trunc(n / 2)) {
    ++k;
    cur = cur.next;
  }
  return cur;
};

middleNode();
