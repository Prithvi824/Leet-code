/**You are given an integer array nums consisting of n elements, and an integer k.
* Find a contiguous subarray whose length is equal to k that has the maximum average
* value and return this value. Any answer with a calculation error less than 10-5 will * be accepted.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


var findMaxAverage = function(nums, k) {
    let last_sum = nums.slice(0,k).reduce((prev_val, curr_val) => {
        return prev_val + curr_val
    });

    let ind = 0;
    let avg = 0;
    let max_avg = last_sum / k;

    for (let i of nums.slice(k)) {
        last_sum = last_sum + i - nums[ind];
        avg = last_sum / k;

        if (max_avg < avg) {
            max_avg = avg;
        }

        ind++
    }

    return max_avg
};

console.log(findMaxAverage([10,20,390,11,32],3))