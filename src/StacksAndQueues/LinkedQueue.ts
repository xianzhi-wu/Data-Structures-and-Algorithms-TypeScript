import { Node } from './Node';

class LinkedQueue<T> {
  private first: Node<T> | null = null;
  private last: Node<T> | null = null;

  public isEmpty(): boolean {
    return this.first === null;
  }

  public enqueue(item: T) {
    const oldlast = this.last;
    this.last = new Node();
    this.last.setItem(item);
    if (this.isEmpty()) {
      this.first = this.last;
    } else {
      oldlast?.setNext(this.last);
    }
  }

  public dequeue(): T | null {
    let item: T | null = null;
    if (this.first !== null) {
      item = this.first.getItem();
      this.first = this.first.getNext();
      if (this.isEmpty()) {
        this.last = null;
      }
    }
    return item;
  }
}

const queue = new LinkedQueue<string>();
console.log(queue.isEmpty());

queue.enqueue("Hello");
queue.enqueue("World");

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
