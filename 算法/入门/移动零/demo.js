/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let nums = [0,1,0,3,12];
 var moveZeroes = function(nums) {
    let left=0,right=nums.length-1;
    while(left<right){
        if(nums[left]===0){
            let temp=nums.splice(left,1)[0];
            nums.splice(right,0,temp)
            right--;
        }else{
            left++;
        }
    }
    return nums;
};

moveZeroes(nums)