import { LRUArray } from "../../src/array/lru";
import { createLinkedListFromArray, deleteLinkedListLastNthNode, getLinkedListMidNode, getLinkedListValues, mergeSortedLinkedList, reverseLinkedList } from "../../src/linked-list/structure";

test('create linked list from array & get linked list values', () => {
  const list = createLinkedListFromArray([1,3,5,7,9]);
  expect(getLinkedListValues(list)).toEqual([1,3,5,7,9]);
});

test('reverse linked list', () => {
  const list = createLinkedListFromArray([1,3,5,7,9]);
  const reverseList = reverseLinkedList(list);
  expect(getLinkedListValues(reverseList)).toEqual([9,7,5,3,1]);
});

test('merge sorted linked lists', () => {
  const list1 = createLinkedListFromArray([1,3,5,7,9]);
  const list2 = createLinkedListFromArray([0,2,4,6,8]);
  const merged = mergeSortedLinkedList(list1, list2);
  expect(getLinkedListValues(merged)).toEqual([0,1,2,3,4,5,6,7,8,9]);
});

test('delete linked list last nth node', () => {
  const list = createLinkedListFromArray([1]);
  const deleted = deleteLinkedListLastNthNode(list, 1);
  expect(deleted).toBe(false);
  const list1 = createLinkedListFromArray([1,3,5,7,9]);
  deleteLinkedListLastNthNode(list1, 3);
  expect(getLinkedListValues(list1)).toEqual([1,3,7,9]);
  const list2 = createLinkedListFromArray([1,3,5,7,9]);
  const deleted2 = deleteLinkedListLastNthNode(list1, 5);
  expect(deleted2).toBe(false);
});

test('get linked list mid node', () => {
  const list1 = createLinkedListFromArray([1,3,5,7,9]);
  const mid1 = getLinkedListMidNode(list1);
  expect(mid1.value).toBe(5);
  const list2 = createLinkedListFromArray([0,2,4,6,8,10]);
  const mid2 = getLinkedListMidNode(list2);
  expect(mid2.value).toBe(6);
  const list3 = createLinkedListFromArray([1]);
  const mid3 = getLinkedListMidNode(list3);
  expect(mid3.value).toBe(1);
  const list4 = createLinkedListFromArray([1,2]);
  const mid4 = getLinkedListMidNode(list4);
  expect(mid4.value).toBe(2);
});

