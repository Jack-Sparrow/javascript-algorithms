import { LRUArray } from "../../src/array/lru";
import { LRULinkedList } from "../../src/linked-list/lru"

const lruSize3Test = (lru) => {
  expect(lru.getValues()).toEqual([]);
  lru.refer(3);
  lru.refer(5);
  lru.refer(3);
  expect(lru.getValues()).toEqual([3, 5]);
  lru.refer(5);
  expect(lru.getValues()).toEqual([5, 3]);
  lru.refer(7);
  expect(lru.getValues()).toEqual([7, 5, 3]);
  lru.refer(5);
  expect(lru.getValues()).toEqual([5, 7, 3]);
  lru.refer(8);
  expect(lru.getValues()).toEqual([8, 5, 7]);
}

test('lru linkedList basic', () => {
  const lru = new LRULinkedList(3);
  lruSize3Test(lru);
});

test('lru array basic', () => {
  const lru = new LRUArray(3);
  lruSize3Test(lru);
});
