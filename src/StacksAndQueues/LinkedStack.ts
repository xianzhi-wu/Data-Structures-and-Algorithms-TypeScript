import { Node } from './Node';

class LinkedStack<T> {
  private first: Node<T> | null = null; // Points to the first node in the stack

  // Checks if the stack is empty
  public isEmpty(): boolean {
    return this.first === null;
  }

  // Add an item to the top of the stack
  public push(item: T): void {
    const oldfirst = this.first; // Save the current first node
    // this.first = new Node(item, oldfirst);
    this.first = new Node<T>();  // Create a new node for the item
    this.first.setItem(item);    // Set the item in the new node
    this.first.setNext(oldfirst); // Link the new node to the old first node
  }

  // Removes and returns the item from the top of the stack
  public pop(): T | null {
    if (this.isEmpty()) {
      // If the stack is empty, return null
      return null;
    }

    const item = this.first!.getItem(); // Get the item from the first node (! - non-null assertation)
    this.first = this.first!.getNext(); // Move the first pointer to the next node. 
    // The reference to the dequed item (the old first node) is no longer held by the reference. 
    // It can be cleaned up by the garbage colllector.

    return item; // Return the popped item
  }

  public reverse(): void {
    let pre = null;
    let cur = this.first;

    while(cur !== null) {
      let next = cur.getNext();
      cur.setNext(pre);
      pre = cur;
      cur = next;
    }

    this.first = pre;
  }
}

// Example usage:
const stack = new LinkedStack<string>();
console.log(stack.isEmpty()); // true - stack is initially empty

stack.push("Hello"); // Push Hello onto the stack
stack.push("World"); // Push Wolrd onto the stack

stack.reverse(); // Reverse the linked list

console.log(stack.pop()); // "Hello" - Removes and returns the top item
console.log(stack.pop()); // "World" - Removes and returns the next item
console.log(stack.isEmpty()); // true - stack is empty again