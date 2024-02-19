/**Given an integer n, return true if it is a power of two. Otherwise, return false.
 * An integer n is a power of two, if there exists an integer x such that n == 2x.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let power = 0;

    while (true){
        let val = 2 ** power;
        if (val >= n){
            return val === n ? true : false
        }
        power += 1
    }
};

console.log(isPowerOfTwo(32))