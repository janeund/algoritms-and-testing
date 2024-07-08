class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
    this.maxSize = 10;
  }

  // tail| enqueue -> |4|3|2|1| -> dequeue |head
  // first in first out

  enqueue(item) {
    if (this.isFull()) {
      return false;
    }
    this.queue[this.tail] = item;
    this.tail++
    return true;
  }
  dequeue() {
    let item = this.queue[this.head];
    this.head++;
    return item;
  }

  getLength() {
    return this.tail - this.head;
  }
  isFull() {
    return this.getLength() === this.maxSize;
  }
  isEmpty() {
    return this.getLength() === 0;
  }
  peek() {
    return this.queue[this.head];
  }
}

module.exports = Queue;
