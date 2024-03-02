/**You are given a binary string s that contains at least one '1'.
 * You have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination.
 * Return a string representing the maximum odd binary number that can be created from the given combination.
 * Note that the resulting string can have leading zeros. */


/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let ones = s.split('1').length - 1;
    return '1'.repeat(ones - 1) + '0'.repeat(s.length - ones) + '1'
};

console.log(maximumOddBinaryNumber('110010'))