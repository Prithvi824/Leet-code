/**You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

Return any permutation of s that satisfies this property. */


/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let mapping = {};
    let res = "";

    for (let i of s){
        if (i in mapping){
            mapping[i] += 1
        }
        else{
            mapping[i] = 1
        }
    }

    for (let i of order){
        if (i in mapping){
            res += i.repeat(mapping[i])
            delete mapping[i]
        }
    }

    for (let i of Object.keys(mapping)){
        res += i.repeat(mapping[i])
    }

    return res
};