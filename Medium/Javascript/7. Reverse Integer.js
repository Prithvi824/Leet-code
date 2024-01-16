/**Given a signed 32-bit integer x, return x with its digits reversed. 
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0. 
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/



/**
 * @param {number} x
 * @return {number}
 */



var reverse = function(x) {
    var num = '';
    if (x < 0) {
        let char = x.toString().slice(1)
        for (let i = char.length -1; i >= 0; i-- ) {
            num += char[i];
        }
        num = '-' + num
    }
    else {
        let char = x.toString()
        for (let i = char.length -1; i >= 0; i-- ) {
            num += char[i]
        }
    }

    parseInt(num)
    if (num > 2147483647 || num < -2147483648) {
        return 0
    }
    return num
};

console.log(reverse(-123))