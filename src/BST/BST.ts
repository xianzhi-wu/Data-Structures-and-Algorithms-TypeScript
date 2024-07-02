import BSTNode from "./Node";

// Binary Search Tree class definition
class BST<T, U> {
  private root: BSTNode.Node<T ,U> | null = null; // Root of the BST

  // Get the value associated with a key
  public get(key: T): U | null {
    let x: BSTNode.Node<T, U> | null = this.root;

    // Traverse the tree to find the node with the given key
    while (x !== null) {
      if (key > x.getKey()) {
        x = x.getRight(); // Move to the right subtree
      } else if (key < x.getKey()) {
        x = x.getLeft(); // Move to the left subtree
      } else {
        return x.getVal(); // Return the value if key is found
      }
    }

    return null; // Return null if key is not found
  }

  // Recursive function to insert a node into the BST
  private putNode(x: BSTNode.Node<T, U> | null, key: T, val: U): BSTNode.Node<T, U> | null  {
    // Base case
    if (x === null) {
      return new BSTNode.Node(key, val); // Create a new node and return it if the current node is null
    }

    // Traverse the tree and adjust the pointers
    if (key > x.getKey()) {
      // If the key is larger than the key of the current node, 
      // go to the right subtree and update the right node after the recursive call.
      x.setRight(this.putNode(x.getRight(), key, val));
    } else if (key < x.getKey()) {
      // If the key is smaller than the key of the current node, 
      // go to the left subtree and update the left node after the recursive call.
      x.setLeft(this.putNode(x.getLeft(), key, val));
    } else {
      // If the key already exists, update the value of the current node
      x.setVal(val);
    }

    return x; // Return the node so that the BST structure is maintained
  }

  // Public method to insert a key-value pair into the BST
  public put(key: T, val: U): void {
    this.root = this.putNode(this.root, key, val); // Update root with the new tree structure
  }

  // Recursive function to find the node with the minimum key
  private minNode(x: BSTNode.Node<T, U> | null): BSTNode.Node<T, U> | null {
    if (x!.getLeft() === null) {
      return x; // Return the current node if left child is null
    }
    return this.minNode(x!.getLeft()); // Recursively find minimum in the left subtree
  }

  // Public method to find the minimum key in the BST
  public min(): T | null {
    if (this.root !== null) {
      return this.minNode(this.root)!.getKey(); // Return the minimum key
    } else {
      return null; // Return null if tree is empty
    }
  }

  // Public method to delete the node with the minimum key
  public delMin(): void {
    this.root = this.delMinNode(this.root); // Update root with the new tree structure after deletion
  }

  // Recursive function to delete the node with the minimum key
  private delMinNode(x: BSTNode.Node<T, U> | null): BSTNode.Node<T, U> | null {
    if (x === null) {
      return null; // Return null if node is null
    }

    if (x.getLeft() === null) {
      return x.getRight(); // Return right child if left child is null
    }

    // Delete minimum in the left subtree, 
    // and update the left child of the current node after the recursive call.
    x.setLeft(this.delMinNode(x.getLeft())); 
    return x; // Return the updated node
  }

  // Recursive function to delete a node with a specific key
  // Adjust the pointers to maintain BST property
  private delNode(x: BSTNode.Node<T, U> | null, key: T): BSTNode.Node<T, U> | null {
    if (x === null) {
      return null; // Return null if node is null
    }

    if (key < x.getKey()) {
      x.setLeft(this.delNode(x.getLeft(), key)); // Recursively delete in the left subtree
    } else if (key > x.getKey()) {
      x.setRight(this.delNode(x.getRight(), key)); // Recursively delete in the right subtree
    } else {
      if (x.getRight() === null) {
        return x.getLeft(); // Return left child if right child is null
      }

      if (x.getLeft() === null) {
        return x.getRight(); // Return right child if left child is null
      }

      const t = x; // Assign current node x to t for manipulation
      // Set the current node x to be the minimum node in the right subtree of t 
      // (swap x with the minimum node from the right subtree)
      x = this.minNode(t.getRight()); 
      // Delete the minimum node in the right subtree of t, 
      // and then set the current node x's right subtree to t
      x?.setRight(this.delMinNode(t.getRight())); 
      x?.setLeft(t.getLeft()); // Set the left subtree of x to the left subtree of t
    }

    return x; // Return the updated node
  }

  // Public method to delete a node with a specific key
  public del(key: T): void {
    this.root = this.delNode(this.root, key); // Update root with the new tree structure after deletion
  }
}

// Example usage:
const bst = new BST<string, string>();

bst.put("test", "hello");
bst.put("test2", "hello2");
bst.put("test3", "hello0");

console.log(bst); // Output the current state of the BST

bst.del("test"); // Delete node with key "test"

console.log(bst.min()); // Output the minimum key in the BST
