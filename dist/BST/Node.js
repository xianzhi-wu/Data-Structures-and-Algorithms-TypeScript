"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BSTNode;
(function (BSTNode) {
    var Node = /** @class */ (function () {
        function Node(key, val) {
            this.left = null;
            this.right = null;
            this.key = key;
            this.val = val;
        }
        Node.prototype.getKey = function () {
            return this.key;
        };
        Node.prototype.getVal = function () {
            return this.val;
        };
        Node.prototype.setVal = function (val) {
            this.val = val;
        };
        Node.prototype.getLeft = function () {
            return this.left;
        };
        Node.prototype.setLeft = function (x) {
            this.left = x;
        };
        Node.prototype.getRight = function () {
            return this.right;
        };
        Node.prototype.setRight = function (x) {
            this.right = x;
        };
        return Node;
    }());
    BSTNode.Node = Node;
})(BSTNode || (BSTNode = {}));
exports.default = BSTNode;
