/**
 * 
 * https://www.hackerrank.com/challenges/tree-inorder-traversal/problem
 */

/*
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function inOrder(root) {
  if (root === null) {
      return
  }
  inOrder(root.left)
  console.log(root.data)
  inOrder(root.right)
}
