/**
 * first we create a map of indices so we don't have to loop again
 * then we find the difference of the target and current number
 * if the difference is available in the array we return the indices
 * of them both
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    const numIndices = {};

    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let missing = target - currentNum;
        if (numIndices.hasOwnProperty(missing)) {
            return [numIndices[missing], i];
        }

        numIndices[currentNum] = i;
    }
};

console.log(twoSum([3,3],6))