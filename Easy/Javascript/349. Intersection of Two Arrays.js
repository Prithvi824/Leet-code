/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must be unique and you may return the result in any order.
 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let mapping = {};
    let arr = []

    for (let num of nums1){
        if (!(num in mapping)){
            mapping[num] = 1
        }
    }
    

    for (let num of nums2){
        if (num in mapping){
            arr.push(num);
            delete mapping[num]
        }
    }

    return arr
};

console.log(intersection([0],[0]))