/**Given a binary tree root and an integer target, delete all the leaf nodes with value target.

Note that once you delete a leaf node with value target, if its parent node becomes a leaf node and has the value target, it should also be deleted (you need to continue doing that until you cannot).
 */

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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
  if (!root) {
    return null;
  }
  if (!root.left && !root.right) {
    return target === root.val ? null : root;
  }

  let left = removeLeafNodes(root.left, target);
  let right = removeLeafNodes(root.right, target);

  if (!left && !right) {
    root.left = null;
    root.right = null;
    return target === root.val ? null : root;
  }
  if (!left) {
    root.left = null;
  } else if (!right) {
    root.right = null;
  }

  return root;
};
