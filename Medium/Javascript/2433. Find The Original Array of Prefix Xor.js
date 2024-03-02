/**You are given an integer array pref of size n. Find and return the array arr of size n that satisfies:
 * pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
 * Note that ^ denotes the bitwise-xor operation.
 * It can be proven that the answer is unique. */


/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    var x = 0;
    var res = Array(pref.length).fill(null);

    for (let ind = 0; ind < pref.length; ind++){
        res[ind] = x ^ pref[ind];
        x ^= res[ind]
    }

    return res
};

console.log(findArray([5,2,0,3,1]))