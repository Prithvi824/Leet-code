/**Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words. */

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let ans = [];
  let curr_line = [];
  let curr_length = 0;
  let i = 0;

  while (i < words.length) {
    if (curr_length + curr_line.length + words[i].length > maxWidth) {
      let line = "";

      if (curr_line.length === 1) {
        line = curr_line[0] + " ".repeat(maxWidth - curr_length);
      } else {
        var spaces = Math.floor(
          (maxWidth - curr_length) / (curr_line.length - 1)
        );
        var remaining_spaces = Math.floor(
          (maxWidth - curr_length) % (curr_line.length - 1)
        );

        for (let j = 0; j < curr_line.length - 1; j++) {
          line += curr_line[j] + " ".repeat(spaces);
          if (remaining_spaces > 0) {
            line += " ";
            remaining_spaces--;
          }
        }

        line += curr_line[ curr_line.length - 1 ]

      }

      ans.push(line);
      curr_line = [];
      curr_length = 0;
    }

    curr_line.push(words[i]);
    curr_length += words[i].length;
    i++;
  }

  ans.push(
    curr_line.join(" ") +
      " ".repeat(maxWidth - curr_length - curr_line.length + 1)
  );

  return ans;
};

console.log(
  fullJustify(
    ["This", "is", "an", "example", "of", "text", "justification."],
    16
  )
);
