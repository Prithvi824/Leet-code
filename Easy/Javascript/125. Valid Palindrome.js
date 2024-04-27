/**A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let word = ""

    for (let char of s){
        if (/^[a-zA-Z0-9]+$/.test(char)){
            word += char
        }
    }

    return word.split("").reverse().join("").toLowerCase() === word.toLowerCase()
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))