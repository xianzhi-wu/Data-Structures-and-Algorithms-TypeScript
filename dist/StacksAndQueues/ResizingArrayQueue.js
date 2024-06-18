"use strict";
var ResizingArrayQueue = /** @class */ (function () {
    function ResizingArrayQueue() {
        this.head = 0; // Index of the first element
        this.tail = 0; // Index of the next available position (that is to store the last element)
        this.N = 0; // Number of the elements in the queue
        this.arr = new Array(1); // Initialize the array with a capacity of 1
    }
    // Checks if the queue is empty
    ResizingArrayQueue.prototype.isEmpty = function () {
        return this.N === 0;
    };
    // Adds an item to the end of the queue
    ResizingArrayQueue.prototype.enqueue = function (item) {
        if (this.tail === this.N) {
            // If the tail reaches the end of the array, resize it to twice its current length
            this.resize(2 * this.N);
        }
        this.arr[this.tail] = item; // Add the item at the tail index
        this.tail++; // Move the tail to the next position
        this.N++; // Increment the number of elements
    };
    // Resizes the array to the given capacity
    ResizingArrayQueue.prototype.resize = function (capacity) {
        var copy = new Array(capacity); // Create a new array with the given capacity
        for (var i = 0; i < this.N; i++) {
            // Copy elements from the old array to the new array
            copy[i] = this.arr[this.head + i];
        }
        this.arr = copy; // Replace the old array with the new array
        this.head = 0; // Reset head to the beginning
        this.tail = this.N; // Set tail to the end of the new array
    };
    // Removes and returns the items at the front of the queue
    ResizingArrayQueue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            // If the queue is empty, return null
            return null;
        }
        var item = this.arr[this.head]; // Get the item from the head index
        this.arr[this.head] = null; // Remove the item from the array
        this.head++; // Move the head to the next position
        this.N--; // Decrement the number of the elements
        // If the number of the elements is a quarter of the array length, resize it to half
        if (this.N > 0 && this.N === this.arr.length / 4) {
            this.resize(this.arr.length / 2);
        }
        return item; // Return the dequeued item
    };
    return ResizingArrayQueue;
}());
var queue = new ResizingArrayQueue();
console.log(queue.isEmpty());
queue.enqueue("Hello");
queue.enqueue("World");
queue.enqueue("!");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
