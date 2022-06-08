//方法一
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
let numbers = [2,7,11,15], target = 9;
// let numbers = [2,3,4], target = 6;
var twoSum = function(numbers, target) {
    for (let index = 0; index < numbers.length; index++) {
        const v = numbers[index];
        let left=index+1,right=numbers.length-1;
        while (left<=right) {
            let mid=Math.floor((right-left)/2+left)
            if((target-v)<numbers[mid]){
                right=mid-1
            }else if((target-v)>numbers[mid]){
                left=mid+1
            }else if((target-v)===numbers[mid]){
                return [index+1,mid+1]
            }
        }
    }
};

twoSum(numbers, target);