/**
 * 
 * https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem
 */


// Snippet from the solution
function insertNodeAtPosition(head, data, position) {
  const newNode = new SinglyLinkedListNode(data)
  
  if (head == null) {
      return newNode    
  }
  
  if (position == 0) {
      newNode.next = head
      return newNode
  }
  
  let currentNode = head;
  for(let i = 0; i < position - 1; i++) {
      currentNode = currentNode.next;   
  }

  newNode.next = currentNode.next;
  currentNode.next = newNode;
  
  return head
}