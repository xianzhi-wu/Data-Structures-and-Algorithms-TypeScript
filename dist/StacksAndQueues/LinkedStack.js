"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var LinkedStack = /** @class */ (function () {
    function LinkedStack() {
        this.first = null; // Points to the first node in the stack
    }
    // Checks if the stack is empty
    LinkedStack.prototype.isEmpty = function () {
        return this.first === null;
    };
    // Add an item to the top of the stack
    LinkedStack.prototype.push = function (item) {
        var oldfirst = this.first; // Save the current first node
        // this.first = new Node(item, oldfirst);
        this.first = new Node_1.Node(); // Create a new node for the item
        this.first.setItem(item); // Set the item in the new node
        this.first.setNext(oldfirst); // Link the new node to the old first node
    };
    // Removes and returns the item from the top of the stack
    LinkedStack.prototype.pop = function () {
        if (this.isEmpty()) {
            // If the stack is empty, return null
            return null;
        }
        var item = this.first.getItem(); // Get the item from the first node (! - non-null assertation)
        this.first = this.first.getNext(); // Move the first pointer to the next node 
        return item; // Return the popped item
    };
    return LinkedStack;
}());
// Example usage:
var stack = new LinkedStack();
console.log(stack.isEmpty()); // true - stack is initially empty
stack.push("Hello"); // Push Hello onto the stack
stack.push("World"); // Push Wolrd onto the stack
console.log(stack.pop()); // "World" - Removes and returns the top item
console.log(stack.pop()); // "Hello" - Removes and returns the next item
console.log(stack.pop()); // null - stack is empty, returns null
console.log(stack.isEmpty()); // true - stack is empty again
