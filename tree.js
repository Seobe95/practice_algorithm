// class Queue {
//   constructor() {
//     this.queue = [];
//     this.front = 0;
//     this.rear = 0;
//   }

//   enqueue(value) {
//     this.queue[this.rear++] = value;
//   }

//   dequeue() {
//     const value = this.queue[this.front];
//     delete this.queue[this.front];
//     this.front += 1;
//     return value;
//   }

//   peek() {
//     return this.queue[this.front];
//   }

//   size() {
//     return this.rear - this.front;
//   }
// }

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    const queue = new Queue();
    queue.enqueue(this.root);
    while (queue.size) {
      const currentNode = queue.dequeue();
      console.log(currentNode.value);
      if (currentNode.left) queue.enqueue(currentNode.left);
      if (currentNode.right) queue.enqueue(currentNode.right);
    }
  }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.left.right.right = new Node(4);
tree.root.right.right = new Node(7);

tree.display();
