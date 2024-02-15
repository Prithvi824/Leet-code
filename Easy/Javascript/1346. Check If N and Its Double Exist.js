/**Given an array arr of integers, check if there exist two indices i and j such that :
 * i != j
 * 0 <= i, j < arr.length
 * arr[i] == 2 * arr[j]
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */

var checkIfExist = function (arr) {
  for (let val in arr) {
    let check_arr = arr.filter((value, ind) => {
        return ind != val
    })

    if (check_arr.includes(arr[val] * 2)) {
      return true;
    }
  }

  return false;
};

console.log(checkIfExist([10, 4, 1, 5, 3]));
