import { ResizingArrayStack } from "./ResizingArrayStack";

export class ResizingArrayStackIterator<T> {
  private i: number;
  private s: (T | null)[];

  constructor(private stack: ResizingArrayStack<T>) {
    this.i = stack.getSize();
    this.s = stack.getStack();
  }

  public hasNext(): boolean {
    return this.i > 0;
  }

  public next(): T | null {
    if (!this.hasNext()) {
      throw new Error("No more elements to iterate.");
    }

    return this.s[--this.i];
  }
}