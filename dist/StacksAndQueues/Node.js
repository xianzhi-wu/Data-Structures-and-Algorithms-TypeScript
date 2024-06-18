"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node() {
        this.item = null; // The item stored in the node
        this.next = null; // Reference to the next node
    }
    // constructor() {
    // }
    // constructor(item: string, next: Node<string> | null) {
    //   this.item = item;
    //   this.next = next;
    // }
    // Sets the item in the node
    Node.prototype.setItem = function (item) {
        this.item = item;
    };
    // Retrieves the item from the node
    Node.prototype.getItem = function () {
        return this.item;
    };
    // Sets the next node reference
    Node.prototype.setNext = function (next) {
        this.next = next;
    };
    // Retrieves the next node reference
    Node.prototype.getNext = function () {
        return this.next;
    };
    return Node;
}());
exports.Node = Node;
