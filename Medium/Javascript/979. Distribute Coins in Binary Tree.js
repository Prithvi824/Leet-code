/**You are given the root of a binary tree with n nodes where each node in the tree has node.val coins. There are n coins in total throughout the whole tree.

In one move, we may choose two adjacent nodes and move one coin from one node to another. A move may be from parent to child, or from child to parent.

Return the minimum number of moves required to make every node have exactly one coin. */

var distributeCoins = function(root) {
    const dfs = (node) => {
        if (!node) {
            return [0, 0, 0];
        }
        if (!node.left && !node.right) {
            if (node.val === 0) {
                return [1, 0, -1];
            } else {
                return [node.val - 1, node.val - 1, 0];
            }
        }

        const left = dfs(node.left);
        const right = dfs(node.right);

        let moves = left[0] + right[0];
        node.val = node.val + left[1] + right[1] + left[2] + right[2];

        if (node.val === 1) {
            return [moves, 0, 0];
        } else if (node.val > 1) {
            return [moves + node.val - 1, node.val - 1, 0];
        } else {
            return [moves + Math.abs(node.val - 1), 0, node.val - 1];
        }
    }

    return dfs(root)[0];
};