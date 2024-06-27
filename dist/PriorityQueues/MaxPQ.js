"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var swap_1 = require("../utils/swap");
var MaxPQ = /** @class */ (function () {
    function MaxPQ(capacity) {
        this.N = 0;
        // this.pq = new Array<T | null>(capacity).fill(null);
        this.pq = new Array(capacity);
    }
    // Checks if the priority queueu is empty
    MaxPQ.prototype.isEmpty = function () {
        return this.N == 0;
    };
    // public getPQ(): (T | null)[] {
    //   return this.pq;
    // }
    // Add a node at the end, and then swim it up
    MaxPQ.prototype.insert = function (x) {
        this.pq[this.N] = x;
        this.swim(this.N);
        this.N++;
    };
    // The heap order is violated when child's key becomes larger than its parent's key
    // To eliminate the violation, exchange the key in child with the key in parent
    // Repeat this process until heap order is restored
    MaxPQ.prototype.swim = function (k) {
        // Math.floor((k-1)/2) - index of the parent node
        while (k > 0 && this.pq[Math.floor((k - 1) / 2)] < this.pq[k]) {
            (0, swap_1.default)(this.pq, k, Math.floor((k - 1) / 2));
            k = Math.floor((k - 1) / 2);
        }
    };
    // The heap order is violated when parent's key becomes smaller than one (or both) of its children's.
    // To eliminate the violation, exchange the key in parent with key in larger child.
    // Repeat this process until heap order is restored
    MaxPQ.prototype.sink = function (k) {
        while (2 * k + 1 <= this.N - 1) {
            // Index of left child
            var j = 2 * k + 1;
            if (j < this.N - 1 && this.pq[j] < this.pq[j + 1]) {
                j++;
            }
            if (this.pq[k] > this.pq[j]) {
                break;
            }
            (0, swap_1.default)(this.pq, k, j);
            k = j;
        }
    };
    // Delete the maximum in a heap
    // Exchange the root with the node ar the end, then sink it down.
    MaxPQ.prototype.delMax = function () {
        var max = this.pq[0];
        (0, swap_1.default)(this.pq, 0, --this.N);
        this.sink(0);
        this.pq[this.N] = null;
        return max;
    };
    return MaxPQ;
}());
var pq = new MaxPQ(10);
pq.insert(10);
pq.insert(11);
pq.insert(12);
pq.insert(9);
pq.insert(8);
pq.insert(13);
console.log(pq.delMax());
console.log(pq.delMax());
console.log(pq.delMax());
console.log(pq.delMax());
console.log(pq.delMax());
