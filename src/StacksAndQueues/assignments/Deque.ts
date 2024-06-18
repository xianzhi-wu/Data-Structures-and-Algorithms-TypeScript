import { Node } from './Node';

class Deque<T> {
  private first: Node<T> | null = null; // Reference to the first node
  private last: Node<T> | null = null; // Reference to the last node
  private N: number = 0; // Size of the deque

  // Checks if the deque is empty
  public isEmpty() {
    return this.N === 0;
  }

  // Returns the size of the deque
  public size(): number {
    return this.N;
  }

  // Adds an item to the front of the deque
  public addfirst(item: T) {
    const oldfirst = this.first; // Save reference to the current first node
    this.first = new Node<T>(); // Create a new node for the new first node
    this.first.setItem(item); // Set the item in the new first node

    if (this.isEmpty()) {
      // If deque is empty, set the new first node to last
      this.last = this.first;
    } else {
      this.first.setNext(oldfirst); // Set the next of the new first node to the old first node
      oldfirst!.setPre(this.first); // Set the previous of the old first node to the new first node
    }

    this.N++; // Increment the size of the deque
  }

  // Adds an item to the end of the deque
  public addlast(item: T) {
    const oldlast = this.last; // Save reference to the current last node
    this.last = new Node(); // Create a new node for the new last node
    this.last.setItem(item); // Set the item in the new last node

    if (this.isEmpty()) {
      // If deque was empty, set the new last node to first
      this.first = this.last;
    } else {
      this.last.setPre(oldlast); // Set the previous of the new last node to the old last node
      oldlast!.setNext(this.last); // Set the next of the old last node to the new last node
    }

    this.N++; // Increment the size of the deque
  }

  // Removes and returns the item from the front of the deque
  public removefirst(): T | null {
    if (this.first === null) {
      // If the first node is null (or deque is empty), return null
      return null;
    }

    const item = this.first.getItem(); // Get the item from the first node
    this.first = this.first.getNext(); // Move first to the next node
    this.N--; // Decrement the size of the deque

    if (this.isEmpty()) {
      this.last = null; // If deque is now empty, set last to null
    } else {
      this.first!.setPre(null); // Set the previous of the new first node to null
    }

    return item; // Return the removed item
  }

  // Removes and returns the item from the end of the deque
  public removelast(): T | null {
    if (this.last === null) {
      // If the last node is null (or deque is empty), return null
      return null;
    }

    const item = this.last.getItem(); // Get the item from the last node
    this.last = this.last.getPre(); // Move last to the previous node
    this.N--; // Decrement the size of the deque

    if (this.isEmpty()) {
      // If deque is now empty, set first to null
      this.first = null;
    } else {
      // Set the next of the new last node to null
      this.last!.setNext(null);
    }

    return item; // Return the removed item
  }

  // Returns an iterator for the deque
  public iterator() {
    let i = this.N; // Initialize iterator count to the size of the deque
    let current = this.first; // Start iteration from the first node

    // Iterator object with hasNext and next methods
    const it = {
      hasNext: (): boolean => {
        return i > 0; // Returns true if there are more elements to iterate
      },
      next: (): T | null => {
        if (current !== null) {
          const item = current.getItem(); // Get the item from the current node
          current = current.getNext(); // Move to the next node
          i--; // Decrement iterator count

          return item; // Return the current item
        } else {
          return null; // Return null if no more elements to iterate
        }
      }
    }
  }
}

const deque = new Deque<string>();
console.log(deque.isEmpty());
deque.addfirst("Hello");
deque.addlast("world");
console.log(deque.isEmpty());
console.log("------------------");

console.log(deque.removefirst());
console.log(deque.removefirst());
console.log(deque.isEmpty());
console.log("------------------");

deque.addfirst("Hello");
deque.addfirst("world");
console.log(deque.removefirst());
console.log(deque.removefirst());
console.log(deque.isEmpty());
console.log("------------------");

deque.addlast("Hello");
deque.addlast("world");
console.log(deque.removefirst());
console.log(deque.removefirst());
console.log(deque.isEmpty());
console.log("------------------");