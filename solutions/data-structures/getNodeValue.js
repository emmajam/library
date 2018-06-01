/**
 * https://www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail/problem
 */

// Complete the getNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function getListLenght(head) {
  let length = 0
  let currentNode = head
  while (currentNode.next !== null) {
      currentNode = currentNode.next
      length++
  }
  return length
}

function getNode(head, positionFromTail) {
  let currentNode = head
  let length = 0
  
  if (head.next === null) {
      return currentNode.data
  }
  
  length = getListLenght(head)
  
  if (positionFromTail === length) {
      return currentNode.data
  }

  for (let i = 0; i < length - positionFromTail; i++) {
      currentNode = currentNode.next
  }
  console.log(currentNode)
  return currentNode.data

}