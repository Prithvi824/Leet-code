/**
 * Given string num representing a non-negative integer num, and an integer k,
 * return the smallest possible integer after removing k digits from num.
 */

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let stack = [];

  for (let val of num) {
    while (stack.length && k > 0 && stack[stack.length - 1] > val) {
      stack.pop();
      k -= 1;
    }
    stack.push(val);
  }

  stack = k > 0 ? stack.slice(0, -k) : stack;

  return stack.join("").replace(/^0+/, "") || "0";
};
