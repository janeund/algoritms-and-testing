class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

const list = new LinkedList();


function printAll() {
  let current = this.head;
  while (current) {
     console.log(current);
     current = current.next;
  }
}

console.log(printAll());
