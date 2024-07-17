"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
var Merge = /** @class */ (function () {
    function Merge() {
    }
    Merge.sort = function (arr, aux, lo, hi) {
        // Base case
        if (hi <= lo) {
            return;
        }
        // Divide array into two halves and recursively sort each half
        var mid = lo + Math.floor((hi - lo) / 2);
        this.sort(arr, aux, lo, mid);
        this.sort(arr, aux, mid + 1, hi);
        // Merge two halves.
        Merge.merge(arr, aux, lo, mid, hi);
    };
    Merge.merge = function (arr, aux, lo, mid, hi) {
        // Copy elements to the auxiliary array
        for (var k = lo; k <= hi; k++) {
            aux[k] = arr[k];
        }
        var i = lo, j = mid + 1;
        for (var k = lo; k <= hi; k++) {
            if (i > mid) {
                // If the left half is exhausted
                arr[k] = aux[j++];
            }
            else if (j > hi) {
                // If the right half is exhausted
                arr[k] = aux[i++];
            }
            else if (aux[j] < aux[i]) {
                // If current element in the right half is less than current element in the left half
                arr[k] = aux[j++];
            }
            else {
                // If current element in the left half is less than or equal to current element in the right half
                arr[k] = aux[i++];
            }
        }
    };
    return Merge;
}());
var MergeBU = /** @class */ (function (_super) {
    __extends(MergeBU, _super);
    function MergeBU() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MergeBU.sort = function (arr) {
        var N = arr.length; // Get the length of the array
        var aux = new Array(N); // Create an auxiliary array of the same length
        // Iterate over sizes of subarrays to merge (1, 2, 4, 8, ..., N)
        for (var sz = 1; sz < N; sz = sz + sz) {
            // Iterate over the array and merge subarrays
            // The condition lo < N - sz ensures that there are enough elements remaining
            // in the array to form a complete pair of subarrays of size sz for merging
            // If there is not a complete pair of subarrays of size sz, no need to merge
            // since the first subarray is already sorted.
            for (var lo_1 = 0; lo_1 < N - sz; lo_1 += sz + sz) {
                // Calculate mid (middle) and hi (high) indices for merging
                var mid = lo_1 + sz - 1;
                var hi_1 = Math.min(lo_1 + sz + sz - 1, N - 1);
                this.merge(arr, aux, lo_1, mid, hi_1); // Merge the subarrays
            }
        }
    };
    return MergeBU;
}(Merge));
// Export the merge function
exports.merge = Merge.merge;
var arr = [2, 1, 3, 6, 5, 7, 9, 8, 0];
var aux = [];
var lo = 0;
var hi = arr.length - 1;
//const ms = new Merge<number>;
Merge.sort(arr, aux, lo, hi);
console.log(arr);
arr = [2, 1, 3, 6, 5, 7, 9, 8, 0, 10];
MergeBU.sort(arr);
console.log(arr);
