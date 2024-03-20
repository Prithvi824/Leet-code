/**Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.
 * According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times. */

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let arr = citations.sort((a, b) => b - a);
  let len = arr.length;

  if (arr[len - 1] >= len) {
    return len;
  } else if (len === 1) {
    return arr[0] <= 1 ? arr[0] : 1;
  }

  for (let i = 0; i < len; i++) {
    if (arr[i] <= i) {
      return i;
    }
  }
};

console.log(hIndex([7, 7, 7, 7, 7, 7, 7]));
