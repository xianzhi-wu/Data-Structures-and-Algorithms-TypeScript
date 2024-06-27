"use strict";
var UnorderedMaxPQ = /** @class */ (function () {
    function UnorderedMaxPQ(capacity) {
        this.N = 0;
        this.pq = new Array(capacity);
    }
    UnorderedMaxPQ.prototype.isEmpty = function () {
        return this.N === 0;
    };
    UnorderedMaxPQ.prototype.insert = function (x) {
        this.pq[this.N++] = x;
    };
    UnorderedMaxPQ.prototype.delMax = function () {
        if (this.isEmpty()) {
            throw new Error("The priority queue is empty!");
        }
        var maxIdx = 0;
        for (var i = 1; i < this.N; i++) {
            if (this.pq[maxIdx] < this.pq[i]) {
                maxIdx = i;
            }
        }
        var max = this.pq[maxIdx];
        this.pq[maxIdx] = this.pq[this.N - 1];
        this.pq[this.N - 1] = null;
        this.N--;
        return max;
    };
    return UnorderedMaxPQ;
}());
var maxPQ = new UnorderedMaxPQ(10);
maxPQ.insert(10);
maxPQ.insert(11);
console.log(maxPQ.delMax());
console.log(maxPQ.delMax());
