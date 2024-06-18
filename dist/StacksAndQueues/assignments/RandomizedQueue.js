"use strict";
var RandomizedQueue = /** @class */ (function () {
    function RandomizedQueue() {
        // private head: number = 0;
        // private tail: number = 0; // Index to add new elements
        this.N = 0; // Number of elements in the randomized queue
        this.arr = new Array(1); // Initialize array with a capacity of 1
    }
    // Checks if the queue is empty
    RandomizedQueue.prototype.isEmpty = function () {
        return this.N === 0;
    };
    // Adds an item to the queue
    RandomizedQueue.prototype.enqueue = function (item) {
        if (this.N === this.arr.length) {
            // If the array is full, resize it to twice its current length
            this.resize(2 * this.N);
        }
        this.arr[this.N] = item; // Add item at the tail
        // this.tail++; // Move tail to the next position
        this.N++; // Increment the number of the elements
    };
    // Removes and returns a random item from the queue
    RandomizedQueue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return null; // If the queue is empty, return null
        }
        var randInt = this.getRandInt(this.N); // Get a random index
        var item = this.arr[randInt]; // Get the item at random index
        this.arr[randInt] = this.arr[this.N - 1]; // Move the last item to the removed position
        this.arr[this.N - 1] = null; // Clear the last item
        // this.tail--; // Move tail to the previous position
        this.N--; // Decrease the number of the elements
        // If the number of the elements is a quarter of the array length, resize it to half
        if (this.N > 0 && this.N === this.arr.length / 4) {
            this.resize(this.arr.length / 2);
        }
        return item; // Return the dequeued item
    };
    // Returns a random item from the queue without removing it
    RandomizedQueue.prototype.sample = function () {
        if (this.isEmpty()) {
            return null; // If the queue is empty, return null
        }
        var randInt = this.getRandInt(this.N); // Get a random index
        var item = this.arr[randInt]; // Get the item at random index
        return item; // Return the sampled item
    };
    // Generates a random integer between 0 (inclusive) and max (exclusive)
    RandomizedQueue.prototype.getRandInt = function (max) {
        return Math.floor(Math.random() * max);
    };
    // Resizes the array to the given capacity
    RandomizedQueue.prototype.resize = function (capacity) {
        var copy = new Array(capacity); // Create a new array with the given capacity
        // Copy elements from the old array to the new array
        for (var i = 0; i < this.N; i++) {
            copy[i] = this.arr[i];
        }
        this.arr = copy; // Replace the old array with the new array
        // this.tail = this.N;
    };
    // Returns an iterator for the queue
    RandomizedQueue.prototype.iterator = function () {
        var _this = this;
        var i = this.N; // Initialize iterator count to the number of the elements
        // Iterator object with hasNext and next methods
        var it = {
            hasNext: function () {
                return i > 0; // Returns true if there are more elements to iterate
            },
            next: function () {
                if (!it.hasNext()) {
                    return null; // Return null if no more elements to iterate
                }
                var randInt = _this.getRandInt(i); // Get a random index within the current range
                var item = _this.arr[randInt]; // Get the item at the random index
                i--; // Decrease iterator count
                _this.arr[randInt] = _this.arr[i]; // Move the last item to the removed position
                _this.arr[i] = item; // Place the originally removed item at the last position
                return item; // Return the current item
            }
        };
        return it; // Return the iterator object
    };
    return RandomizedQueue;
}());
// Example usage:
var rq = new RandomizedQueue();
rq.enqueue(1);
rq.enqueue(2);
rq.enqueue(3);
// Iterate through the queue using the iterator
var it = rq.iterator();
while (it.hasNext()) {
    console.log(it.next());
}
console.log('-----------------');
console.log(rq.sample()); // Randomly returns 1, 2, or 3
console.log('-----------------');
console.log(rq.dequeue()); // Randomly removes and returns 1, 2, or 3
console.log(rq.dequeue()); // Randomly removes and returns 1, 2, or 3
console.log(rq.dequeue()); // Randomly removes and returns 1, 2, or 3
console.log(rq.dequeue()); // Returns null (queue is empty)
console.log(rq.isEmpty()); // true
