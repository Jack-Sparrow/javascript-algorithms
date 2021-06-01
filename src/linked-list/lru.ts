import { getLinkedListValues, LinkedListNode } from "./structure";

export class LRULinkedList {
  private max: number = 0;
  private count: number = 0;
  private list: LinkedListNode = undefined;

  constructor(max: number) {
    this.max = Math.max(typeof max === 'number' ? max : 0, 1);
  }

  refer(value: number) {
    const prev = new LinkedListNode(undefined, this.list);
    let node = prev;
    let lastPrev = node;
    while(node.next) {
      let aim = node.next;
      if (aim.value === value) {
        node.next = aim.next;
        aim.next = this.list;
        this.list = aim;
        return;
      }
      lastPrev = node;
      node = aim;
    }
    prev.value = value;
    this.list = prev;
    if (this.count < this.max) {
      this.count++;
    } else {
      lastPrev.next = undefined;
    }
  }

  getValues() {
    return getLinkedListValues(this.list);
  }
}