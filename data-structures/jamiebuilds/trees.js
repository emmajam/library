// https://github.com/jamiebuilds/itsy-bitsy-data-structures/blob/master/itsy-bitsy-data-structures.js

/**
 * We'll start off with an extremely simple tree structure. It doesn't have any
 * special rules to it and looks something like this:
 *
 *     Tree {
 *       root: {
 *         value: 1,
 *         children: [{
 *           value: 2,
 *           children: [...]
 *         }, {
 *           value: 3,
 *           children: [...]
 *         }]
 *       }
 *     }
 */

class Tree {

  /**
   * The tree has to start with a single parent, the "root" of the tree.
   */

  constructor() {
    this.root = null;
  }

  /**
   * We need a way to traverse our tree and call a function on each node in the
   * tree.
   */

  traverse(callback) {
    // We'll define a walk function that we can call recursively on every node
    // in the tree.
    function walk(node) {
      // First call the callback on the node.
      callback(node);
      // Then recursively call the walk function on all of its children.
      node.children.forEach(walk);
    }

    // Now kick the traversal process off.
    walk(this.root);
  }

  /**
   * Next we need a way to add nodes to our tree.
   */

  add(value, parentValue) {
    let newNode = {
      value,
      children: []
    };

    // If there is no root, just set it to the new node.
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    // Otherwise traverse the entire tree and find a node with a matching value
    // and add the new node to its children.
    this.traverse(node => {
      if (node.value === parentValue) {
        node.children.push(newNode);
      }
    });
  }
}