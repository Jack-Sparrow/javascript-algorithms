// 不太好
export class LRUArray {
  private max: number = 0;
  private list: number[] = [];

  constructor(max: number) {
    this.max = Math.max(typeof max === 'number' ? max : 0, 1);
  }

  refer(value: number) {
    const index = this.list.indexOf(value);
    if (index >= 0) {
      this.list.splice(index, 1);
      this.list.unshift(value);
    } else {
      this.list.unshift(value);
      if (this.list.length > this.max) {
        this.list.pop();
      }
    }
  }

  getValues() {
    return this.list;
  }
}