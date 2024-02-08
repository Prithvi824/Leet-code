/**Given an array of positive integers arr, find a pattern of length m that is repeated k or more times.
 * A pattern is a subarray (consecutive sub-sequence) that consists of one or more values,
 * repeated multiple times consecutively without overlapping. A pattern is defined by its length and the number of repetitions.
 * Return true if there exists a pattern of length m that is repeated k or more times, otherwise return false. */

/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */


var containsPattern = function (arr, m, k) {
    const n = arr.length;

    function isEqual(start1, start2, length) {
        for (let i = 0; i < length; i++) {
            if (arr[start1 + i] !== arr[start2 + i]) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i <= n - m * k; i++) {
        let isPattern = true;

        for (let j = 1; j < k; j++) {
            if (!isEqual(i, i + j * m, m)) {
                isPattern = false;
                break;
            }
        }

        if (isPattern) {
            return true;
        }
    }

    return false;
};

console.log(containsPattern([14, 4, 32, 32, 32, 32, 432, 23], 2, 2));
