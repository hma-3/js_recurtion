const { swapPairs, ListNode } = require('../src/swapPairs');

describe('swapPairs', () => {
  function createLinkedList(arr) {
    if (arr.length === 0) {
      return null;
    }

    const head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }

    return head;
  }

  function linkedListToArray(head) {
    const result = [];

    while (head) {
      result.push(head.val);
      head = head.next;
    }

    return result;
  }

  test('swaps pairs in a standard linked list', () => {
    const head = createLinkedList([1, 2, 3, 4]);
    const newHead = swapPairs(head);

    expect(linkedListToArray(newHead)).toEqual([2, 1, 4, 3]);
  });

  test('handles an empty linked list', () => {
    const head = createLinkedList([]);
    const newHead = swapPairs(head);

    expect(linkedListToArray(newHead)).toEqual([]);
  });

  test('handles a single-node linked list', () => {
    const head = createLinkedList([1]);
    const newHead = swapPairs(head);

    expect(linkedListToArray(newHead)).toEqual([1]);
  });

  test('handles an odd number of nodes', () => {
    const head = createLinkedList([1, 2, 3]);
    const newHead = swapPairs(head);

    expect(linkedListToArray(newHead)).toEqual([2, 1, 3]);
  });

  test('handles repeated values and longer lists', () => {
    const head = createLinkedList([1, 1, 2, 2, 3, 4]);
    const newHead = swapPairs(head);

    expect(linkedListToArray(newHead)).toEqual([1, 1, 2, 2, 4, 3]);
  });
});
