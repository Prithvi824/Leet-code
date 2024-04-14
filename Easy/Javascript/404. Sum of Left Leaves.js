/**Given the root of a binary tree, return the sum of all left leaves.

A leaf is a node with no children. A left leaf is a leaf that is the left child of another node. */

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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let arr = [[root, false]];
  let ans = 0;
  let itm, pos;

  while (arr.length > 0) {
    [itm, pos] = arr.pop();

    if (pos && !itm.left && !itm.right) ans += itm.val;
    if (itm.right) arr.push([itm.right, false]);
    if (itm.left) arr.push([itm.left, true]);
  }

  return ans;
};
