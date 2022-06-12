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
    let last = this.head;
    while (temp) {
      last = temp;
      temp = temp.next;
    }
    last.next = node;
  }
  return node;
};

SingleLinkedList.prototype.getHead = function (value) {
  return this.head;
};

let singleLinkedList = new SingleLinkedList();
let arr = [1, 2, 3, 4, 5];
for (const v of arr) {
  singleLinkedList.append(v);
}
let head = singleLinkedList.getHead();

var removeNthFromEnd1 = function (head, n) {
  let temp = head;
  let L = 0;
  while (temp) {
    L++;
    temp = temp.next;
  }
  if (L < n || L === 1) return (head = null);
  if (L === n) {
    head = head.next;
    return head;
  }
  temp = head;
  let index = 0;
  let pre;
  while (temp) {
    if (index === L - n - 1) {
      pre = temp;
    }
    if (index === L - n) {
      pre.next = temp.next;
      break;
    }
    index++;
    temp = temp.next;
  }
  return head;
};

var removeNthFromEnd2 = function (head, n) {
  let stack = [];
  let temp = head;
  while (temp) {
    stack.push(temp);
    temp = temp.next;
  }

  if (stack.length < n || stack.length === 1) return (head = null);
  if (stack.length === n) {
    head = head.next;
    return head;
  }

  let pre = stack[stack.length - n - 1];
  let curr = stack[stack.length - n];
  pre.next = curr.next;

  return head;
};

var removeNthFromEnd = function (head, n) {
  let first = head.next;
  let second = head;
  let index = 1;
  while (first) {
    if (index > n) {
      second = second.next;
    }
    index++;
    first = first.next;
  }
  if (index < n || index === 1) return (head = null);
  if (index === n) {
    head = head.next;
    return head;
  }
  second.next = second.next.next;

  return head;
};

let newHead = removeNthFromEnd(head, 2);

let a = newHead;
while (a) {
  console.log(a.value);
  a = a.next;
}
