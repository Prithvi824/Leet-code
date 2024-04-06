/**Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string. */

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let ans = "";
  let stack = [];

  for (let char of s) {
    if (char === ")" && stack.length >= 1) {
      ans += char;
      stack.pop();
    } else if (char === "(") {
      ans += char;
      stack.push(")");
    } else if (char != ")") {
      ans += char;
    }
  }

  while (stack.length >= 1) {
    let ind = ans.lastIndexOf("(");
    ans = ans.slice(0, ind) + ans.slice(ind + 1, ans.length + 1);
    stack.pop()
  }

  return ans
};


console.log(minRemoveToMakeValid("))(("))