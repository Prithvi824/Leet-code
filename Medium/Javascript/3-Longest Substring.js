/**
* Given a string s, find the length of the longest 
* substring without repeating characters.
*/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let sub = '';
    let point = 0;
    let size = 0;
    let sub_point = 0;

    while (point <= s.length - 1) {
        if (sub.indexOf(s[point]) === -1) {
            sub += s[point]
        }
        else {
            size = Math.max(size, sub.length);
            sub_point = sub.indexOf(s[point]);
            sub = sub.slice(sub_point+1) + s[point];
        };
        point = point + 1;
    }

    if (sub.length > size) {
        return sub.length
    }
    return size
};

console.log(lengthOfLongestSubstring('dvdf'))
