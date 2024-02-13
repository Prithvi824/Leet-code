/**Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".
 * A string is palindromic if it reads the same forward and backward.
 */

/**
 * @param {string[]} words
 * @return {string}
 */


var firstPalindrome = function(words) {
    for (let word of words) {
        if (word === word.split("").reverse().join("")){
            return word
        }
    }

    return ""
};
