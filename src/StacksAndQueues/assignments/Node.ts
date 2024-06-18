export class Node<T> {
  private item: T | null = null; // The item stored in the node
  private pre: Node<T> | null = null; // Reference to the previous node
  private next: Node<T> | null = null; // Reference to the next node

  // constructor() {

  // }

  // constructor(item: string, next: Node<string> | null) {
  //   this.item = item;
  //   this.next = next;
  // }

  // Set the item in the node
  public setItem(item: T) {
    this.item = item;
  }

  // Retrieves the item from the node
  public getItem(): T | null {
    return this.item;
  }

  // Sets the next node reference
  public setNext(next: Node<T> | null) {
    this.next = next;
  }

  // Retrieves the next node reference
  public getNext(): Node<T> | null {
    return this.next;
  }

  // Sets the previous node reference
  public setPre(pre: Node<T> | null) {
    this.pre = pre;
  }

  // Retrieves the previous node reference
  public getPre(): Node<T> | null {
    return this.pre;
  }
}