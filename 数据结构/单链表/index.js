function Node(value) {
  this.value = value;
  this.next = null;
}

function SingleLinkedList() {
  this.head = null;
}

SingleLinkedList.prototype.append = function (value) {
  let node = new Node(value);
  if (!this.head) {
    this.head = node;
  } else {
    let temp = this.head;
    while (temp) {
      this.head.next = node;
      temp = node.next;
    }
  }
  return node;
};

SingleLinkedList.prototype.getHead = function (value) {
  return this.head;
};

let singleLinkedList = new SingleLinkedList();
