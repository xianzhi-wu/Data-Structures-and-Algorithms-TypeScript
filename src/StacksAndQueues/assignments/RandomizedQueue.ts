class RandomizedQueue<T> {
  private arr: (T | null)[]; // Array to store randomized queue elements
  // private head: number = 0;
  // private tail: number = 0; // Index to add new elements
  private N: number = 0; // Number of elements in the randomized queue

  constructor() {
    this.arr = new Array<T>(1); // Initialize array with a capacity of 1
  }

  // Checks if the queue is empty
  public isEmpty(): boolean {
    return this.N === 0;
  }

  // Adds an item to the queue
  public enqueue(item: T): void {
    if (this.N === this.arr.length) { 
      // If the array is full, resize it to twice its current length
      this.resize(2 * this.N);
    }

    this.arr[this.N] = item; // Add item at the tail
    // this.tail++; // Move tail to the next position
    this.N++; // Increment the number of the elements
  }

  // Removes and returns a random item from the queue
  public dequeue(): T | null {
    if (this.isEmpty()) {
      return null; // If the queue is empty, return null
    }

    const randInt = this.getRandInt(this.N); // Get a random index
    const item = this.arr[randInt]; // Get the item at random index

    this.arr[randInt] = this.arr[this.N - 1]; // Move the last item to the removed position
    this.arr[this.N - 1] = null; // Clear the last item
    // this.tail--; // Move tail to the previous position
    this.N--; // Decrease the number of the elements

    // If the number of the elements is a quarter of the array length, resize it to half
    if (this.N > 0 && this.N === this.arr.length / 4) {
      this.resize(this.arr.length / 2);
    }

    return item; // Return the dequeued item
  }

  // Returns a random item from the queue without removing it
  public sample(): T | null {
    if (this.isEmpty()) {
      return null; // If the queue is empty, return null
    }

    const randInt = this.getRandInt(this.N); // Get a random index
    const item = this.arr[randInt]; // Get the item at random index

    return item; // Return the sampled item
  }

  // Generates a random integer between 0 (inclusive) and max (exclusive)
  public getRandInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  // Resizes the array to the given capacity
  public resize(capacity: number): void {
    const copy: (T | null)[] = new Array<T>(capacity); // Create a new array with the given capacity

    // Copy elements from the old array to the new array
    for (let i = 0; i < this.N; i++) {
      copy[i] = this.arr[i];
    }

    this.arr = copy; // Replace the old array with the new array
    // this.tail = this.N;
  }

  // Returns an iterator for the queue
  public iterator() {
    let i: number = this.N; // Initialize iterator count to the number of the elements

    // Iterator object with hasNext and next methods
    const it = {
      hasNext: (): boolean => {
        return i > 0; // Returns true if there are more elements to iterate
      },
      next: (): T | null => {
        if (!it.hasNext()) {
          return null; // Return null if no more elements to iterate
        }

        const randInt = this.getRandInt(i); // Get a random index within the current range
        const item = this.arr[randInt]; // Get the item at the random index

        i--; // Decrease iterator count
        this.arr[randInt] = this.arr[i]; // Move the last item to the removed position
        this.arr[i] = item; // Place the originally removed item at the last position

        return item; // Return the current item
      }
    };

    return it; // Return the iterator object
  }
}

// Example usage:
const rq = new RandomizedQueue<number>();

rq.enqueue(1);
rq.enqueue(2);
rq.enqueue(3);

// Iterate through the queue using the iterator
const it = rq.iterator();
while (it.hasNext()) {
  console.log(it.next());
}

console.log('-----------------');

console.log(rq.sample()); // Randomly returns 1, 2, or 3

console.log('-----------------');

console.log(rq.dequeue()); // Randomly removes and returns 1, 2, or 3
console.log(rq.dequeue()); // Randomly removes and returns 1, 2, or 3
console.log(rq.dequeue()); // Randomly removes and returns 1, 2, or 3
console.log(rq.dequeue()); // Returns null (queue is empty)
console.log(rq.isEmpty()); // true