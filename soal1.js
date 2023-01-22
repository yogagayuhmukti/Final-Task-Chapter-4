const nums1 = [2,7,11,15]
const nums2 = [3,2,4]
const nums3 = [3,3]

// leetcode
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j] == target){
            return [i,j]
            }
        }
    }
    return [];
};


console.log(twoSum(nums1,9))
console.log(twoSum(nums2,6))
console.log(twoSum(nums3,6))
document.write(twoSum(nums1,9) + '<br />');
document.write(twoSum(nums2,6) + '<br />');
document.write(twoSum(nums3,6) + '<br />');