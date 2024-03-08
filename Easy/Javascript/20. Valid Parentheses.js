/** Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  let closing = ["}", "]", ")"];

  let stack = [];

  for (let bracket of s) {
    if (closing.includes(bracket)) {
        if (stack.length == 0 || map[stack.length - 1] != bracket){
            return false
        }
        stack.pop()
    }
    else{
        stack.push(bracket)
    }
  }

  return stack.length == 0 ? true : false;
};
