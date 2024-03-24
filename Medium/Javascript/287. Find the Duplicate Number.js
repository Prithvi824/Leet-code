/**Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space. */


/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = 0;
    let fast = 0;

    while (true){
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (slow === fast){
            slow = nums[0];
            break
        }
    }

    while (slow != fast){
        slow = nums[slow]
        fast = nums[fast]

        if (slow === fast) return slow
    }
};