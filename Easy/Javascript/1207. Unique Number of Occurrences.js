/**Given an array of integers arr, return true if the number of occurrences of each value 
 * in the array is unique or false otherwise. */




/**
 * @param {number[]} arr
 * @return {boolean}
 */



var uniqueOccurrences = function(arr) {
    var mapping = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in mapping) {
            mapping[arr[i]] = mapping[arr[i]] + 1
        }
        else {
            mapping[arr[i]] = 1
        }
    }

    var visited = []

    for (key of Object.values(mapping)) {
        if (visited.includes(key)) {
            console.log('breka at', key)
            return false
        }
        visited.push(key)
    }
    return true
};

console.log(uniqueOccurrences([1,2,2,1,1,3]))