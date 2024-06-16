"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node() {
        this.item = null;
        this.next = null;
    }
    // constructor() {
    // }
    // constructor(item: string, next: Node<string> | null) {
    //   this.item = item;
    //   this.next = next;
    // }
    Node.prototype.setItem = function (item) {
        this.item = item;
    };
    Node.prototype.getItem = function () {
        return this.item;
    };
    Node.prototype.setNext = function (next) {
        this.next = next;
    };
    Node.prototype.getNext = function () {
        return this.next;
    };
    return Node;
}());
exports.Node = Node;
