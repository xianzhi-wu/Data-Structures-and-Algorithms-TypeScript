"use strict";
var ResizingArrayQueue = /** @class */ (function () {
    function ResizingArrayQueue() {
        this.head = 0;
        this.tail = 0;
        this.N = 0;
        this.s = new Array(1);
    }
    ResizingArrayQueue.prototype.isEmpty = function () {
        return this.N === 0;
    };
    ResizingArrayQueue.prototype.enqueue = function (item) {
        if (this.N === this.s.length) {
            this.resize(2 * this.s.length);
        }
        this.s[this.tail] = item;
        this.tail++;
        this.N++;
    };
    ResizingArrayQueue.prototype.resize = function (capacity) {
        var copy = new Array(capacity);
        for (var i = 0; i < this.N; i++) {
            copy[i] = this.s[this.head + i];
        }
        this.s = copy;
        this.head = 0;
        this.tail = this.N;
    };
    ResizingArrayQueue.prototype.dequeue = function () {
        var item = null;
        if (!this.isEmpty()) {
            item = this.s[this.head];
            this.head++;
            this.N--;
        }
        if (this.N > 0 && this.N === this.s.length / 4) {
            this.resize(this.s.length / 2);
        }
        return item;
    };
    return ResizingArrayQueue;
}());
var queue = new ResizingArrayQueue();
console.log(queue.isEmpty());
queue.enqueue("Hello");
queue.enqueue("World");
queue.enqueue("!");
queue.enqueue("!!");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
