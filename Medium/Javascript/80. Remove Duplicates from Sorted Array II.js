/**Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory. */


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let map = {}
    let ind = 0;
    let len = nums.length;

    while(ind < len){
        let val = nums[ind]
        if (!(val in map) || map[val] < 2){
            map[val] = val in map ? map[val] + 1 : 1;
            ind += 1;
        }
        else {
            nums.splice(ind,1);
            len = nums.length;
        }
    }

    return len
};

console.log(removeDuplicates([1,1,1,2,2,2]))