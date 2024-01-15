/** Given an integer x, return true if x is a palindrome, and false otherwise.**/


/**
 * @param {number} x
 * @return {boolean}
 */


var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    var y = x.toString()
    if (y === y.split("").reverse().join("")) {
        return true
    }
    return false
};

console.log(isPalindrome(101))