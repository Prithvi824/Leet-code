/**Given a string s consisting only of characters 'a', 'b', and 'c'. You are asked to apply the following algorithm on the string any number of times:

Pick a non-empty prefix from the string s where all the characters in the prefix are equal.
Pick a non-empty suffix from the string s where all the characters in this suffix are equal.
The prefix and the suffix should not intersect at any index.
The characters from the prefix and suffix must be the same.
Delete both the prefix and the suffix.
Return the minimum length of s after performing the above operation any number of times (possibly zero times).
 */

/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r && s.charAt(l) === s.charAt(r)) {
    let char = s.charAt(l);

    while (l <= r && s.charAt(l) === char) {
      l++;
    }

    while (r <= r && s.charAt(r) === char) {
      r--;
    }
  }

  return l > r ? 0 : r - l + 1;
};
