/**Given the root of a binary tree and two integers val and depth, add a row of nodes with value val at the given depth depth.

Note that the root node is at depth 1.

The adding rule is:

Given the integer depth, for each not null tree node cur at the depth depth - 1, create two tree nodes with value val as cur's left subtree root and right subtree root.
cur's original left subtree should be the left subtree of the new left subtree root.
cur's original right subtree should be the right subtree of the new right subtree root.
If depth == 1 that means there is no depth depth - 1 at all, then create a tree node with value val as the new root of the whole original tree, and the original tree is the new root's left subtree. */

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function addRow(root, level, val, depth) {
  if (!root) return null;

  if (level + 1 === depth) {
    let lTemp = root.left;
    let rTemp = root.right;

    root.left = new TreeNode(val, lTemp);
    root.right = new TreeNode(val, right=rTemp);

    return root;
  }

  root.left = addRow(root.left, level + 1, val, depth);
  root.right = addRow(root.right, level + 1, val, depth);

  return root;
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  if (depth === 1) {
    return new TreeNode(val, root);
  }
  return addRow(root, 1, val, depth);
};
