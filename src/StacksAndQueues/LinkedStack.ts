import { Node } from './Node';

class LinkedStack<T> {
  private first: Node<T> | null = null;

  public isEmpty(): boolean {
    return this.first === null;
  }

  public push(item: T): void {
    const oldfirst: Node<T> | null = this.first;
    // this.first = new Node(item, oldfirst);
    this.first = new Node();
    this.first.setItem(item);
    this.first.setNext(oldfirst);
  }

  public pop(): T | null {
    if (this.first === null) {
      return null;
    }

    const item: T | null = this.first.getItem();
    this.first = this.first.getNext();

    return item;
  }
}

const stack = new LinkedStack<string>();
console.log(stack.isEmpty()); // true

stack.push("Hello");
stack.push("World");

console.log(stack.pop()); // "World"
console.log(stack.pop()); // "Hello"
console.log(stack.pop()); // null
console.log(stack.isEmpty()); // truee