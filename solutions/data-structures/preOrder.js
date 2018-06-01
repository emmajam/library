// https://www.hackerrank.com/challenges/tree-preorder-traversal/problem

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

function preOrder(root) {
  if (root === null) {
      return
  }
  console.log(root.data)
  preOrder(root.left)
  preOrder(root.right)
}