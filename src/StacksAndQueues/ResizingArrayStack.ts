// import { ResizingArrayStackIterator } from './ResizingArrayStackIterator';

export class ResizingArrayStack<T> {
  private s: (T | null)[];
  private N: number = 0;

  constructor() {
    this.s = new Array<T>(1);
  }

  public isEmpty(): boolean {
    return this.N === 0;
  }

  public getSize(): number {
    return this.N;
  }

  public getStack(): (T | null)[] {
    return this.s;
  }

  public push(item: T) {
    if (this.N === this.s.length) {
      this.resize(2 * this.s.length)
    }
    this.s[this.N++] = item;
  }

  public resize(capacity: number) {
    const copy: (T | null)[] = new Array<T>(capacity);
    for (let i: number = 0; i < this.N; i++) {
      copy[i] = this.s[i];
    }
    this.s = copy;
  }

  public pop(): T | null {
    const item: T | null = this.s[--this.N];
    this.s[this.N] = null; 
    if (this.N > 0 && this.N == this.s.length / 4) {
      this.resize(this.s.length / 2);
    }
    return item;
  }

  // public iterator(): ResizingArrayStackIterator<T> {
  //   return new ResizingArrayStackIterator(this);
  // }

  public iterator() {
    let i: number = this.N; 

    const it = {
      hasNext: (): boolean => {
        return i > 0;
      },
      next: (): T | null => {
        if (!it.hasNext()) {
          throw new Error("No more elements to iterate!");
        }
        return this.s[--i];
      }
    }

    return it;
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
console.log(stack.pop()); // undefined
console.log(stack.isEmpty()); // true