"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var Deque = /** @class */ (function () {
    function Deque() {
        this.first = null;
        this.last = null;
        this.N = 0;
    }
    Deque.prototype.isEmpty = function () {
        return this.N === 0;
    };
    Deque.prototype.size = function () {
        return this.N;
    };
    Deque.prototype.addfirst = function (item) {
        var oldfirst = this.first;
        this.first = new Node_1.Node();
        this.first.setItem(item);
        if (this.isEmpty()) {
            this.last = this.first;
        }
        else {
            this.first.setNext(oldfirst);
            oldfirst === null || oldfirst === void 0 ? void 0 : oldfirst.setPre(this.first);
        }
        this.N++;
    };
    Deque.prototype.addlast = function (item) {
        var oldlast = this.last;
        this.last = new Node_1.Node();
        this.last.setItem(item);
        if (this.isEmpty()) {
            this.first = this.last;
        }
        else {
            this.last.setPre(oldlast);
            oldlast === null || oldlast === void 0 ? void 0 : oldlast.setNext(this.last);
        }
        this.N++;
    };
    Deque.prototype.removefirst = function () {
        var _a;
        if (this.first === null) {
            return null;
        }
        var item = this.first.getItem();
        this.first = this.first.getNext();
        this.N--;
        if (this.isEmpty()) {
            this.last = null;
        }
        else {
            (_a = this.first) === null || _a === void 0 ? void 0 : _a.setPre(null);
        }
        return item;
    };
    Deque.prototype.removelast = function () {
        var _a;
        if (this.last === null) {
            return null;
        }
        var item = this.last.getItem();
        this.last = this.last.getPre();
        this.N--;
        if (this.isEmpty()) {
            this.first = null;
        }
        else {
            (_a = this.last) === null || _a === void 0 ? void 0 : _a.setNext(null);
        }
        return item;
    };
    Deque.prototype.iterator = function () {
        var i = this.N;
        var current = this.first;
        var it = {
            hasNext: function () {
                return i > 0;
            },
            next: function () {
                if (current !== null) {
                    var item = current === null || current === void 0 ? void 0 : current.getItem();
                    current = current.getNext();
                    i--;
                    return item;
                }
                else {
                    return null;
                }
            }
        };
    };
    return Deque;
}());
var deque = new Deque();
console.log(deque.isEmpty());
deque.addfirst("Hello");
deque.addlast("world");
console.log(deque.isEmpty());
console.log("------------------");
console.log(deque.removefirst());
console.log(deque.removefirst());
console.log(deque.isEmpty());
console.log("------------------");
deque.addfirst("Hello");
deque.addfirst("world");
console.log(deque.removefirst());
console.log(deque.removefirst());
console.log(deque.isEmpty());
console.log("------------------");
deque.addlast("Hello");
deque.addlast("world");
console.log(deque.removefirst());
console.log(deque.removefirst());
console.log(deque.isEmpty());
console.log("------------------");
