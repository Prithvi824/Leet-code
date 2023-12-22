/**
 * Given a string s of zeros and ones, return the maximum score after splitting the string
 * into two non-empty substrings (i.e. left substring and right substring).
 * The score after splitting a string is the number of zeros in the left substring 
 * plus the number of ones in the right substring.
 */


/**
 * @param {string} s
 * @return {number}
 */

var maxScore = function(s) {
    let maxScore = 0;
    let countZerosLeft = 0;
    let countOnesRight = s.split('1').length - 1;

    for (let i = 0; i < s.length - 1; i++) {
        countZerosLeft += s[i] === '0' ? 1 : 0;
        countOnesRight -= s[i] === '1' ? 1 : 0;
        maxScore = Math.max(maxScore, countZerosLeft + countOnesRight);
    }

    return maxScore;
};

console.log(maxScore("0100"))