
class ResizingArrayQueue<T> {
  private s: (T | null)[];
  private head: number = 0;
  private tail: number = 0;
  private N: number = 0;

  constructor() {
    this.s = new Array<T>(1);
  }

  public isEmpty() {
    return this.N === 0;
  }

  public enqueue(item: T) {
    if (this.N === this.s.length) {
      this.resize(2 * this.s.length);
    }

    this.s[this.tail] = item;
    this.tail++;
    this.N++;
  }

  public resize(capacity: number) {
    const copy: (T | null)[] = new Array<T>(capacity);

    for (let i: number = 0; i < this.N; i++) {
      copy[i] = this.s[this.head + i];
    }

    this.s = copy;
    this.head = 0;
    this.tail = this.N;
  }

  public dequeue(): T | null {
    let item: T | null = null;

    if (!this.isEmpty()) {
      item = this.s[this.head];
      this.head++;
      this.N--;
    }

    if (this.N > 0 && this.N === this.s.length / 4) {
      this.resize(this.s.length / 2);
    }

    return item;
  }
}

const queue = new ResizingArrayQueue<string>();
console.log(queue.isEmpty());

queue.enqueue("Hello");
queue.enqueue("World");
queue.enqueue("!");
queue.enqueue("!!");

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());