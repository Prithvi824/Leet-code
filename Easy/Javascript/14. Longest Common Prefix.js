/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "". */


/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0]
    };

    let prefix = strs[0];
    let count = 1;

    while (count < strs.length) {
        if (prefix.length === 0) {
            return ""
        }

        if (!strs[count].startsWith(prefix)) {
            prefix = prefix.slice(0,-1)
        }
        else {
            count++
        }
    }

    return prefix
};

console.log(longestCommonPrefix(["flower","flow","flight"]))