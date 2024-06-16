import { Node } from './Node';

class Deque<T> {
  private first: Node<T> | null = null;
  private last: Node<T> | null = null;
  private N: number = 0;

  constructor() {

  }

  public isEmpty() {
    return this.N === 0;
  }

  public size(): number {
    return this.N;
  }

  public addfirst(item: T) {
    const oldfirst = this.first;
    this.first = new Node();
    this.first.setItem(item);

    if (this.isEmpty()) {
      this.last = this.first;
    } else {
      this.first.setNext(oldfirst);
      oldfirst?.setPre(this.first);
    }

    this.N++;
  }

  public addlast(item: T) {
    const oldlast = this.last;
    this.last = new Node();
    this.last.setItem(item);

    if (this.isEmpty()) {
      this.first = this.last;
    } else {
      this.last.setPre(oldlast);
      oldlast?.setNext(this.last);
    }

    this.N++;
  }

  public removefirst(): T | null {
    if (this.first === null) {
      return null;
    }

    const item = this.first.getItem();
    this.first = this.first.getNext();
    this.N--;

    if (this.isEmpty()) {
      this.last = null;
    } else {
      this.first?.setPre(null);
    }

    return item;
  }

  public removelast(): T | null {
    if (this.last === null) {
      return null;
    }

    const item = this.last.getItem();
    this.last = this.last.getPre();
    this.N--;

    if (this.isEmpty()) {
      this.first = null;
    } else {
      this.last?.setNext(null);
    }

    return item;
  }

  public iterator() {
    let i = this.N;
    let current = this.first;

    const it = {
      hasNext: (): boolean => {
        return i > 0;
      },
      next: (): T | null => {
        if (current !== null) {
          const item = current?.getItem();
          current = current.getNext();
          i--;
          return item;
        } else {
          return null;
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