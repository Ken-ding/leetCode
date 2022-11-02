## 思路
  - 将left指向元首，right指向元尾
  - 当 left《right时；
    - 交换s[left]和s[right]
    - left右移一位
    - right左移一位
  - 当left》=right,反转结束，返回字符数组；
