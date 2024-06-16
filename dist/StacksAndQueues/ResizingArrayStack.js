"use strict";
// import { ResizingArrayStackIterator } from './ResizingArrayStackIterator';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizingArrayStack = void 0;
var ResizingArrayStack = /** @class */ (function () {
    function ResizingArrayStack() {
        this.N = 0;
        this.s = new Array(1);
    }
    ResizingArrayStack.prototype.isEmpty = function () {
        return this.N === 0;
    };
    ResizingArrayStack.prototype.getSize = function () {
        return this.N;
    };
    ResizingArrayStack.prototype.getStack = function () {
        return this.s;
    };
    ResizingArrayStack.prototype.push = function (item) {
        if (this.N === this.s.length) {
            this.resize(2 * this.s.length);
        }
        this.s[this.N++] = item;
    };
    ResizingArrayStack.prototype.resize = function (capacity) {
        var copy = new Array(capacity);
        for (var i = 0; i < this.N; i++) {
            copy[i] = this.s[i];
        }
        this.s = copy;
    };
    ResizingArrayStack.prototype.pop = function () {
        var item = this.s[--this.N];
        this.s[this.N] = null;
        if (this.N > 0 && this.N == this.s.length / 4) {
            this.resize(this.s.length / 2);
        }
        return item;
    };
    // public iterator(): ResizingArrayStackIterator<T> {
    //   return new ResizingArrayStackIterator(this);
    // }
    ResizingArrayStack.prototype.iterator = function () {
        var _this = this;
        var i = this.N;
        var it = {
            hasNext: function () {
                return i > 0;
            },
            next: function () {
                if (!it.hasNext()) {
                    throw new Error("No more elements to iterate!");
                }
                return _this.s[--i];
            }
        };
        return it;
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
console.log(stack.pop()); // undefined
console.log(stack.isEmpty()); // true
