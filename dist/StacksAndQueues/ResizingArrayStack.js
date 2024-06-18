"use strict";
// import { ResizingArrayStackIterator } from './ResizingArrayStackIterator';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizingArrayStack = void 0;
var ResizingArrayStack = /** @class */ (function () {
    function ResizingArrayStack() {
        this.N = 0; // Number of elements in the stack
        this.arr = new Array(1); // Initialize the array with a capacity of 1
    }
    // Checks if the stack is empty
    ResizingArrayStack.prototype.isEmpty = function () {
        return this.N === 0;
    };
    // Returns the number of elements in the stack
    ResizingArrayStack.prototype.getSize = function () {
        return this.N;
    };
    // Returns the current stack array
    ResizingArrayStack.prototype.getStack = function () {
        return this.arr;
    };
    // Add an item to the top of the stack
    ResizingArrayStack.prototype.push = function (item) {
        // If the array is full, resize it the twice its current length
        if (this.N === this.arr.length) {
            this.resize(2 * this.arr.length);
        }
        this.arr[this.N] = item; // Add the item at index N
        this.N++; // Increment N
    };
    // Resize the array to the given capacity
    ResizingArrayStack.prototype.resize = function (capacity) {
        var copy = new Array(capacity); // Create a new array with the given capacity
        for (var i = 0; i < this.N; i++) {
            // Copy elements from the old array to the new array
            copy[i] = this.arr[i];
        }
        this.arr = copy; // Replace the old array with the new array
    };
    // Removes and returns the item from the top of the stack
    ResizingArrayStack.prototype.pop = function () {
        if (this.isEmpty()) {
            return null; // If the stack is empty, return null
        }
        var item = this.arr[--this.N]; // Get the item from the top of the stack
        this.arr[this.N] = null; // Remove the item from the array/stack
        // If the number of the elements is a quarter of the array length, resize it to half
        if (this.N > 0 && this.N == this.arr.length / 4) {
            this.resize(this.arr.length / 2);
        }
        return item; // Return the popped item
    };
    // public iterator(): ResizingArrayStackIterator<T> {
    //   return new ResizingArrayStackIterator(this);
    // }
    // Returns an iterator for the stack
    ResizingArrayStack.prototype.iterator = function () {
        var _this = this;
        var i = this.N; // Initialize iterator index to the number of elements
        // Iterator object with hasNext and next methods
        var it = {
            hasNext: function () {
                return i > 0; // Returns true if there are more elements to iterate
            },
            next: function () {
                if (!it.hasNext()) {
                    throw new Error("No more elements to iterate!"); // Throws error if no more elements
                }
                return _this.arr[--i]; // Returns the next element in the iteration
            }
        };
        return it; // Returns the iterator object
    };
    return ResizingArrayStack;
}());
exports.ResizingArrayStack = ResizingArrayStack;
var stack = new ResizingArrayStack();
console.log(stack.isEmpty()); // true
stack.push("Hello");
stack.push("World");
var iterator = stack.iterator();
while (iterator.hasNext()) {
    console.log(iterator.next());
}
console.log('------------------');
console.log(stack.pop()); // "World"
console.log(stack.pop()); // "Hello"
console.log(stack.pop()); // null
console.log(stack.isEmpty()); // true
