/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 * string convert(string s, int numRows);
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  let matrix = Array.from({ length: numRows }, () => []);
  let ind = 0;
  let flag = true;

  for (let char of s) {
    matrix[ind].push(char);

    ind += flag ? 1 : -1;
    if (ind === 0) {
      flag = true;
    } else if (ind === numRows - 1) {
      flag = false;
    }
  }

  return matrix.map(row => row.join('')).join('');
};

console.log(convert("PAYPALISHIRING", 3));
