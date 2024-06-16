"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var LinkedStack = /** @class */ (function () {
    function LinkedStack() {
        this.first = null;
    }
    LinkedStack.prototype.isEmpty = function () {
        return this.first === null;
    };
    LinkedStack.prototype.push = function (item) {
        var oldfirst = this.first;
        // this.first = new Node(item, oldfirst);
        this.first = new Node_1.Node();
        this.first.setItem(item);
        this.first.setNext(oldfirst);
    };
    LinkedStack.prototype.pop = function () {
        if (this.first === null) {
            return null;
        }
        var item = this.first.getItem();
        this.first = this.first.getNext();
        return item;
    };
    return LinkedStack;
}());
var stack = new LinkedStack();
console.log(stack.isEmpty()); // true
stack.push("Hello");
stack.push("World");
console.log(stack.pop()); // "World"
console.log(stack.pop()); // "Hello"
console.log(stack.pop()); // null
console.log(stack.isEmpty()); // truee
