/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively,
 * return the median of the two sorted arrays. 
*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


var findMedianSortedArrays = function(nums1, nums2) {
    let merged = []
    merged.push(...nums1,...nums2)
    if (merged.length === 0) {
        return 0
    };

    merged.sort((a,b) => a-b)
    if (merged.length % 2 === 0) {
        mid = merged.length / 2
        let median = (merged[mid] + merged[mid -1]) / 2
        return median
    }
    return merged[Math.floor((merged.length)/2)]
};

console.log(findMedianSortedArrays([1,3,5],[4,2,6,7]))