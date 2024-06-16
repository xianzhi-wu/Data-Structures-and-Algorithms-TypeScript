"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizingArrayStackIterator = void 0;
var ResizingArrayStackIterator = /** @class */ (function () {
    function ResizingArrayStackIterator(stack) {
        this.stack = stack;
        this.i = stack.getSize();
        this.s = stack.getStack();
    }
    ResizingArrayStackIterator.prototype.hasNext = function () {
        return this.i > 0;
    };
    ResizingArrayStackIterator.prototype.next = function () {
        if (!this.hasNext()) {
            throw new Error("No more elements to iterate.");
        }
        return this.s[--this.i];
    };
    return ResizingArrayStackIterator;
}());
exports.ResizingArrayStackIterator = ResizingArrayStackIterator;
