/**
 * https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree/problem
 */

function maxDepth(root) {
  if (root == null) {
    return
  } 
  let leftDepth = maxDepth(root.left)
  let rightDepth = maxDepth(root.right)

  /* use the larger one */
  if (leftDepth > rightDepth) {
    return leftDepth + 1
  } else {
    return rightDepth + 1
  }
}
