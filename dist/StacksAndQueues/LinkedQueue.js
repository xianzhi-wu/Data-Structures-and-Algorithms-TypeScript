"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var LinkedQueue = /** @class */ (function () {
    function LinkedQueue() {
        this.first = null;
        this.last = null;
    }
    LinkedQueue.prototype.isEmpty = function () {
        return this.first === null;
    };
    LinkedQueue.prototype.enqueue = function (item) {
        var oldlast = this.last;
        this.last = new Node_1.Node();
        this.last.setItem(item);
        if (this.isEmpty()) {
            this.first = this.last;
        }
        else {
            oldlast === null || oldlast === void 0 ? void 0 : oldlast.setNext(this.last);
        }
    };
    LinkedQueue.prototype.dequeue = function () {
        var item = null;
        if (this.first !== null) {
            item = this.first.getItem();
            this.first = this.first.getNext();
            if (this.isEmpty()) {
                this.last = null;
            }
        }
        return item;
    };
    return LinkedQueue;
}());
var queue = new LinkedQueue();
console.log(queue.isEmpty());
queue.enqueue("Hello");
queue.enqueue("World");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
