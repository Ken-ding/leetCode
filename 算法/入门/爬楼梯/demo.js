var climbStairs = function (n) {
  let p = 0,
    q = 0,
    r = 1;
  for (let i = 1; i <= n; ++i) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};

// climbStairs(5);
//1、1、2、3、5、8、13、21、34
//递归实现
const fibonacci1=function(n){
  if(n===0)return 0;
  if(n===1)return 1;
  return fibonacci(n-1)+fibonacci(n-2)
}

//动态规划
const fibonacci=function(n){
  let dp=[1,1];
  let l=0;
  let r=1;
  let j=1;
  while (j++) {
    if(j>n)break;
    dp[j]=dp[l]+dp[r];
    l++;
    r++;
  }
  return dp[n]
}

fibonacci(6)
