/**A wonderful string is a string where at most one letter appears an odd number of times.

For example, "ccjjc" and "abab" are wonderful, but "ab" is not.
Given a string word that consists of the first ten lowercase English letters ('a' through 'j'), return the number of wonderful non-empty substrings in word. If the same substring appears multiple times in word, then count each occurrence separately.

A substring is a contiguous sequence of characters in a string. */

/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function (word) {
  const letterMap = {
    a: 1 << 0,
    b: 1 << 1,
    c: 1 << 2,
    d: 1 << 3,
    e: 1 << 4,
    f: 1 << 5,
    g: 1 << 6,
    h: 1 << 7,
    i: 1 << 8,
    j: 1 << 9,
  };

  let cumulativeXor = 0;
  let mapping = { 0: 1 };
  let ans = 0;

  for (let i = 0; i < word.length; i++) {
    cumulativeXor ^= letterMap[word[i]];
    ans += xorWithMap(cumulativeXor, mapping);

    if (!mapping.hasOwnProperty(cumulativeXor)) {
      mapping[cumulativeXor] = 1;
    } else {
      ans += mapping[cumulativeXor];
      mapping[cumulativeXor]++;
    }
  }
  return ans;
};

function xorWithMap(currentXor, mapping) {
  const letterMap = {
    a: 1 << 0,
    b: 1 << 1,
    c: 1 << 2,
    d: 1 << 3,
    e: 1 << 4,
    f: 1 << 5,
    g: 1 << 6,
    h: 1 << 7,
    i: 1 << 8,
    j: 1 << 9,
  };

  let ans = 0;
  for (let key in letterMap) {
    let res = currentXor ^ letterMap[key];
    ans += mapping.hasOwnProperty(res) ? mapping[res] : 0;
  }
  return ans;
}

console.log(wonderfulSubstrings("fiabhedce"));