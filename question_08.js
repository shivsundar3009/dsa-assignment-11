class CircularQueue {
  constructor(k) {
    this.queue = new Array(k); // Array to store the queue elements
    this.size = k; // Maximum size of the queue
    this.front = this.rear = -1; // Pointers to keep track of front and rear elements
  }

  enQueue(value) {
    if (this.isFull()) {
      return false; // Queue is full, cannot enqueue
    }

    if (this.isEmpty()) {
      this.front = 0; // Initialize front when enqueuing the first element
    }

    this.rear = (this.rear + 1) % this.size; // Move the rear pointer in a circular manner
    this.queue[this.rear] = value; // Enqueue the value at the rear position
    return true;
  }

  deQueue() {
    if (this.isEmpty()) {
      return false; // Queue is empty, cannot dequeue
    }

    if (this.front === this.rear) {
      // Reset front and rear when dequeuing the last element
      this.front = this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size; // Move the front pointer in a circular manner
    }
    
    return true;
  }

  Front() {
    if (this.isEmpty()) {
      return -1; // Queue is empty
    }
    return this.queue[this.front]; // Return the front element
  }

  Rear() {
    if (this.isEmpty()) {
      return -1; // Queue is empty
    }
    return this.queue[this.rear]; // Return the rear element
  }

  isEmpty() {
    return this.front === -1; // If front is -1, the queue is empty
  }

  isFull() {
    return (this.rear + 1) % this.size === this.front; // If rear + 1 is equal to front, the queue is full
  }
}