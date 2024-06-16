export class Node<T> {
  private item: T | null = null;
  private next: Node<T> | null = null;

  // constructor() {

  // }

  // constructor(item: string, next: Node<string> | null) {
  //   this.item = item;
  //   this.next = next;
  // }

  public setItem(item: T) {
    this.item = item;
  }

  public getItem(): T | null {
    return this.item;
  }

  public setNext(next: Node<T> | null) {
    this.next = next;
  }

  public getNext(): Node<T> | null {
    return this.next;
  }
}