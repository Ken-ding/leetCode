## 思路
- 创建两个左右指针
- 左指针代表开始字符
- 右指针不断右移，直到遇到重复字符为止
- 遇到重复字符，记录左和右指针中间字符的长度
- 然后左指针和右指针位置移动到下一个字符，同上操作
- 返回记录的最大字串长度