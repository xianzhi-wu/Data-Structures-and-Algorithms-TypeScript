"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var LinkedQueue = /** @class */ (function () {
    function LinkedQueue() {
        this.first = null; // Points the the first node in the queue
        this.last = null; // Points to the last node in the queue
    }
    // Checks if the queue is empty
    LinkedQueue.prototype.isEmpty = function () {
        return this.first === null;
    };
    // Adds an item to the end of the queue
    LinkedQueue.prototype.enqueue = function (item) {
        var oldlast = this.last; // Save the current last node
        this.last = new Node_1.Node(); // Create a new node for the item
        this.last.setItem(item); // Set the item in the new node
        if (this.isEmpty()) {
            // If the queue is empty, the new node is both the first and last node
            this.first = this.last;
        }
        else {
            // Otherwise, link the new last node to the old last node
            oldlast.setNext(this.last);
        }
    };
    // Removes and returns the item at the front of the queue
    LinkedQueue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            // If the queue is empty, return null
            return null;
        }
        var item = this.first.getItem(); // Get the item from the first node. ! - Non-null assertation.
        this.first = this.first.getNext(); // Move the first pointer to the next node. 
        if (this.isEmpty()) {
            // If the queue is now empty, set the last pointer to null
            this.last = null;
        }
        // Return the dequeued item
        return item;
    };
    return LinkedQueue;
}());
var queue = new LinkedQueue();
console.log(queue.isEmpty()); // true - queue is initially empty
queue.enqueue("Hello"); // Add Hello to the queue
queue.enqueue("World"); // Add Worlf to the queue
console.log(queue.dequeue()); // Hello - Removes and returns the first item
console.log(queue.dequeue()); // World - Removes and returns the next item
console.log(queue.isEmpty()); // true - queue is empty again
