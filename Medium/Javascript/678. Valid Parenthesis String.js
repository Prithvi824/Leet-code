/** Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

The following rules define a valid string:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string ""./

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let leftMax = 0;
  let leftMin = 0;

  for (let ch of s) {
    if (ch === "(") {
      leftMax += 1;
      leftMin += 1;
    } else if (ch === ")") {
      leftMax -= 1;
      leftMin -= 1;
    } else {
      leftMax += 1;
      leftMin -= 1;
    }

    if (leftMax < 0) return false;
    if (leftMin < 0) leftMin = 0;
  }

  return leftMin === 0 ? true : false;
};
