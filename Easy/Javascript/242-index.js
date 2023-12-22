/** I created a map of each variable with its count then matched it with anagram 
 * if a word falls short or is missing i return false
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    const map = {}

    for (let ch of s) {
        if (map[ch] === undefined) {
            map[ch] = 1
        }
        else {
            map[ch] += 1
        }
    }

    for (let ch of t) {
        if (map[ch] === undefined) {
            return false
        }
        else {
            map[ch] -= 1
            if (map[ch] < 0) {
                return false
            }
        }
    }

    return true
};

console.log(isAnagram('aacc','ccac'))