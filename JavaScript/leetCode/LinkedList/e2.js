var Node = function (val) {
  this.val = val;
  this.next = null;
};

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);

  //   console.log("Before: " + this);

  if (!this.head) {
    // If there is no head
    this.head = newNode; // head now is newNode
    this.tail = newNode; // tail is new Node
  } else {
    newNode.next = this.head; // if there is a head, the head becomes 2nd
    this.head = newNode; // the new node is now the head
  }
  this.size++; // increase the size by 1
  //   console.log(this);
  return this;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);

  if (!this.head) {
    // if there is no head node
    this.head = newNode;
    this.tail = newNode;
  } else {
    // if there is a node
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.size++;
  return this;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  const newNode = new Node(val);
  if (index > this.size) return; // if the index is bigger than the size ignore
  if (index <= 0) {
    // if index is less than or equal to zero
    return this.addAtHead(val); // add to head
  }
  if (index === this.size) {
    // if the index equals the size add at tail
    return this.addAtTail(val);
  }

  // if nothing above is true

  let cur = this.head;
  for (let i = 0; i < index - 1; i++) {
    cur = cur.next;
  }
  newNode.next = cur.next ? cur.next : null;
  cur.next = newNode;
  this.size++;
  return this;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (this.size === 0 || index > this.size - 1 || index < 0) return -1;
  let cur = this.head;

  for (let i = 0; i < index; i++) {
    cur = cur.next;
  }
  return cur.val;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.size || index < 0) return;
  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return this;
  }

  let cur = this.head;
  for (let i = 0; i < index - 1; i++) {
    cur = cur.next;
  }

  cur.next = cur.next.next ? cur.next.next : null;
  if (!cur.next) {
    this.tail = cur;
  }
  this.size--;
  return this;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

const obj = new MyLinkedList();

console.log(obj);
obj.addAtHead(2);
obj.addAtHead(1);
obj.addAtTail(3);
obj.addAtTail(4);
console.log("\n");
console.log(obj.get(1));
// console.log(obj);
console.log(obj);
