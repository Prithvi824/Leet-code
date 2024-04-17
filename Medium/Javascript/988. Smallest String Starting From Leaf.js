/**You are given the root of a binary tree where each node has a value in the range [0, 25] representing the letters 'a' to 'z'.

Return the lexicographically smallest string that starts at a leaf of this tree and ends at the root.

As a reminder, any shorter prefix of a string is lexicographically smaller.

For example, "ab" is lexicographically smaller than "aba".
A leaf of a node is a node that has no children. */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
function numToal(number) {
  return String.fromCharCode(97 + number);
}

function smallestFromLeaf(root) {
  const queue = [];
  queue.push([root, numToal(root.val)]);
  const results = [];

  while (queue.length > 0) {
    const [cur, path] = queue.shift();
    if (!cur.left && !cur.right) {
      results.push(path.split("").reverse().join(""));
    }
    if (cur.left) {
      queue.push([cur.left, path + numToal(cur.left.val)]);
    }
    if (cur.right) {
      queue.push([cur.right, path + numToal(cur.right.val)]);
    }
  }
  results.sort();
  return results[0];
}
