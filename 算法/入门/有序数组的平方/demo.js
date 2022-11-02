/**
 * @param {number[]} nums
 * @return {number[]}
 */
let nums = [-10000,-9999,-7,-5,0,0,10000];
 var sortedSquares = function(nums) {
    let left=[],right=[],arr=[];
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if(element<0){
            left.unshift(Math.pow(element,2))
        }else{
            right.push(Math.pow(element,2))
        }
    }
    while(left.length&&right.length){
        if(left[0]<right[0]){
            arr.push(left.shift())
        }else{
            arr.push(right.shift())
        }
    }
    return arr.concat(left,right)
};

sortedSquares(nums)