/**Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer. */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let pointer_1 = 0;
    let pointer_2 = 0;

    let l_1 = nums1.length;
    let l_2 = nums2.length;

    while( pointer_1 < l_1 && pointer_2 < l_2  ){
        let v_1 = nums1[pointer_1];
        let v_2 = nums2[pointer_2];

        if (v_1 === v_2) return v_1
        else if (v_1 > v_2) pointer_2++
        else pointer_1++
    }

    return -1
};