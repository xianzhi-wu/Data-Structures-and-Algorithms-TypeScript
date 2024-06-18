// import { ResizingArrayStackIterator } from './ResizingArrayStackIterator';

export class ResizingArrayStack<T> {
  private arr: (T | null)[]; // Array to store stack elements
  private N: number = 0; // Number of elements in the stack

  constructor() {
    this.arr = new Array<T>(1); // Initialize the array with a capacity of 1
  }

  // Checks if the stack is empty
  public isEmpty(): boolean {
    return this.N === 0;
  }

  // Returns the number of elements in the stack
  public getSize(): number {
    return this.N;
  }

  // Returns the current stack array
  public getStack(): (T | null)[] {
    return this.arr;
  }

  // Add an item to the top of the stack
  public push(item: T): void {
    // If the array is full, resize it the twice its current length
    if (this.N === this.arr.length) {
      this.resize(2 * this.arr.length)
    }

    this.arr[this.N] = item; // Add the item at index N
    this.N++; // Increment N
  }

  // Resize the array to the given capacity
  public resize(capacity: number): void {
    const copy: (T | null)[] = new Array<T>(capacity); // Create a new array with the given capacity

    for (let i: number = 0; i < this.N; i++) {
      // Copy elements from the old array to the new array
      copy[i] = this.arr[i];
    }

    this.arr = copy; // Replace the old array with the new array
  }

  // Removes and returns the item from the top of the stack
  public pop(): T | null {
    if (this.isEmpty()) {
      return null; // If the stack is empty, return null
    } 

    const item= this.arr[--this.N]; // Get the item from the top of the stack
    this.arr[this.N] = null; // Remove the item from the array/stack

    // If the number of the elements is a quarter of the array length, resize it to half
    if (this.N > 0 && this.N == this.arr.length / 4) {
      this.resize(this.arr.length / 2);
    }

    return item; // Return the popped item
  }

  // public iterator(): ResizingArrayStackIterator<T> {
  //   return new ResizingArrayStackIterator(this);
  // }

  // Returns an iterator for the stack
  public iterator() {
    let i: number = this.N; // Initialize iterator index to the number of elements

    // Iterator object with hasNext and next methods
    const it = {
      hasNext: (): boolean => {
        return i > 0; // Returns true if there are more elements to iterate
      },
      next: (): T | null => {
        if (!it.hasNext()) {
          throw new Error("No more elements to iterate!"); // Throws error if no more elements
        }

        return this.arr[--i]; // Returns the next element in the iteration
      }
    }

    return it; // Returns the iterator object
  }

}

const stack = new ResizingArrayStack<string>();
console.log(stack.isEmpty()); // true

stack.push("Hello");
stack.push("World");

const iterator = stack.iterator();
while (iterator.hasNext()) {
  console.log(iterator.next()); 
}

console.log('------------------');

console.log(stack.pop()); // "World"
console.log(stack.pop()); // "Hello"
console.log(stack.pop()); // null
console.log(stack.isEmpty()); // true