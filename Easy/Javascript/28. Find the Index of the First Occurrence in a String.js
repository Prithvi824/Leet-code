/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
 * or -1 if needle is not part of haystack.
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let x = haystack.match(needle);
  return x ? x.index : -1;
};

console.log(strStr("leetcode", "leeto"));
