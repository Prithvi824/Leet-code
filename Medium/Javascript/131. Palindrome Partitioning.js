/**Given a string s, partition s such that every 
substring
 of the partition is a 
palindrome
. Return all possible palindrome partitioning of s. */

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];
  let part = [];

  function dfs(i) {
    if (i >= s.length) {
      res.push(part.slice(0, part.length));
      return;
    }

    for (let j = i; j < s.length; j++) {
      if (checkPalindrome(s, i, j)) {
        part.push(s.slice(i, j + 1));
        dfs(j + 1);
        part.pop();
      }
    }
  }

  dfs(0)

  return res;
};

function checkPalindrome(s, i, j) {
  while (i <= j) {
    if (s[i] != s[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
}

console.log(partition("aba"))