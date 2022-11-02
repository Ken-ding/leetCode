let nums = [1,3,5,6], target = 4;

var searchInsert = function(nums, target) {
    let left=0,right=nums.length-1,res=nums.length;
    while(left<=right){
        let mid=Math.floor((right-left)/2+left);
        if(target<=nums[mid]){
            right=mid-1
            res=mid;
        }else{
            left=mid+1
        }
    }
    return res
};