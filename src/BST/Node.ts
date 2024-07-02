namespace BSTNode {
  export class Node<T, U> {
    private key: T;
    private val: U;
    private left: Node<T, U> | null = null; 
    private right: Node<T, U> | null = null;

    constructor(key: T, val: U) {
      this.key = key;
      this.val = val;
    }

    public getKey(): T {
      return this.key;
    }

    public getVal(): U {
      return this.val;
    }

    public setVal(val: U): void {
      this.val = val;
    }

    public getLeft(): Node<T, U> | null {
      return this.left;
    }

    public setLeft(x: Node<T, U> | null): void {
      this.left = x;
    }

    public getRight(): Node<T, U> | null {
      return this.right;
    }

    public setRight(x: Node<T, U> | null): void {
      this.right = x;
    }
  }
}

export default BSTNode;