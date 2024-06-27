"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var swap_1 = require("../utils/swap");
var Heap = /** @class */ (function () {
    function Heap() {
    }
    Heap.prototype.sort = function (arr) {
        // Get the last index
        var N = arr.length - 1;
        // Construct a maxheap using the method 'sink'
        for (var i = Math.floor((N - 1) / 2); i >= 0; i--) {
            this.sink(arr, i, N);
        }
        // heap sort
        // Move the maximum to the end (of the unsorted element)
        // Repeat until the sorted array is constructed
        while (N > 0) {
            (0, swap_1.default)(arr, 0, N--);
            this.sink(arr, 0, N);
        }
    };
    // The heap order is violated when parent's key becomes smaller than one (or both) of its children's.
    // To eliminate the violation, exchange the key in parent with key in larger child.
    // Repeat this process until heap order is restored
    Heap.prototype.sink = function (arr, k, N) {
        while (2 * k + 1 <= N) {
            // Index of the left child
            var j = 2 * k + 1;
            if (j < N && arr[j] < arr[j + 1]) {
                j++;
            }
            if (arr[k] > arr[j]) {
                break;
            }
            (0, swap_1.default)(arr, k, j);
            k = j;
        }
    };
    return Heap;
}());
var heap = new Heap();
var arr = [5, 3, 2, 7, 1, 6, 8, 9, 0, 4];
heap.sort(arr);
console.log(arr);
