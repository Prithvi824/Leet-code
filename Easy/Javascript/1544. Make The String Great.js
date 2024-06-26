/**Given a string s of lower and upper case English letters.

A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:

0 <= i <= s.length - 2
s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

Notice that an empty string is also good. */

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  if (s.length <= 1) return s;

  let ans = "";

  for (let char of s) {
    if (ans.length === 0) {
      ans = ans.concat(char);
    } else if (
      char != ans.slice(-1)[0] &&
      (char.toUpperCase() === ans.slice(-1)[0] ||
        ans.slice(-1)[0].toUpperCase() === char)
    ) {
      ans = ans.slice(0, -1);
    } else {
      ans += char;
    }
  }

  return ans;
};

console.log(makeGood("leEeetcode"));
