/**Given a positive integer n, find the pivot integer x such that:

The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.
 */


/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let summation = (n * (n + 1)) / 2;
    let pivot_sum = 1;
    let val = 1;

    while (pivot_sum <= summation){
        if(pivot_sum === summation){
            return val
        }
        else{
            summation -= val;
            val += 1;
            pivot_sum += val;
        }
    }

    return -1
};

console.log(51 / 2)