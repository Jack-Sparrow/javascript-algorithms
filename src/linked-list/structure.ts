export class LinkedListNode {
  value: number;
  next: LinkedListNode;
  constructor(value: number, next?: LinkedListNode) {
    this.value = value;
    this.next = next;
  }
}

export const createLinkedListFromArray = (arr: number[]): LinkedListNode => {
  let node: LinkedListNode;
  for (let i = arr.length - 1; i >= 0; i--) {
    node = new LinkedListNode(arr[i], node);
  }
  return node;
}

export const getLinkedListValues = (list: LinkedListNode): number[] => {
  const values: number[] = [];
  let node = list;
  while(node) {
    values.push(node.value);
    node = node.next;
  }
  return values;
}

export const reverseLinkedList = (list: LinkedListNode): LinkedListNode => {
  let result: LinkedListNode;
  let node = list;
  while(node) {
    let tmp = node;
    node = node.next;
    tmp.next = result;
    result = tmp;
  }
  return result;
}

export const isLinkedListCircular = (list: LinkedListNode): boolean => {
  const nodeSet = new Set();
  let node = list;
  while(node) {
    if (nodeSet.has(node)) {
      return true;
    }
    nodeSet.add(node);
    node = node.next;
  }
  return false;
}

export const isLinkedListCircular1 = (list: LinkedListNode): boolean => {
  if (!list || !list.next) {
    return false;
  }
  let slow = list;
  let fast = list.next;
  while(slow !== fast) {
    if (!fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
}

export const mergeSortedLinkedList = (list1: LinkedListNode, list2: LinkedListNode): LinkedListNode => {
  let node1 = list1;
  let node2 = list2;
  let result = new LinkedListNode(undefined);
  let current: LinkedListNode = result;
  while(node1 && node2) {
    let node: LinkedListNode;
    if (node1.value <= node2.value) {
      node = node1;
      node1 = node1.next;
    } else {
      node = node2;
      node2 = node2.next;
    }
    current.next = node;
    current = node;
  }
  if (node1) {
    current.next = node1;
  } else if (node2) {
    current.next = node2;
  }
  return result.next;
}

// 删除倒数第 n 个节点， n < size
export const deleteLinkedListLastNthNode = (list: LinkedListNode, n: number): LinkedListNode => {
  if (n < 1) {
    return list;
  }
  let queue: LinkedListNode[] = [];
  let node = list;
  let prev: LinkedListNode;
  while(node) {
    queue.push(node)
    if (queue.length > n) {
      prev = queue.shift();
    }
    node = node.next;
  }
  if (prev) {
    prev.next = queue[1];
    return prev;
  }
  return queue[1];
}

// 有两个时返回第二个
export const getLinkedListMidNode = (list: LinkedListNode): LinkedListNode => {
  let head = list;
  let mid = list;
  while (head && head.next) {
    mid = mid.next;
    head = head.next.next;
  }
  return mid;
}

// export class LinkedList extends LinkedListNode {
//   constructor(value: number, next?: LinkedListNode) {
//     super(value, next);
//   }
//   search(value: number): LinkedListNode {
//     let node: LinkedListNode = this;
//     while(node) {
//       if (node.value === value) {
//         break;
//       }
//       node = node.next;
//     }
//     return node;
//   }
//   delete(value: number): LinkedListNode {
//     const prev = new LinkedListNode(undefined, this);
//     let node: LinkedListNode = prev;
//     while(node) {
//       if (node.next && node.next.value === value) {
//         let deleted = node.next;
//         node.next = deleted.next;
//         return deleted;
//       }
//     }
//   }
// }
