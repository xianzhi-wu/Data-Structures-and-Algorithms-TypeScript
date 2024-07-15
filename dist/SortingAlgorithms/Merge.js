"use strict";
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
// Export the merge function
exports.merge = Merge.merge;
var arr = [2, 1, 3, 6, 5, 7, 9, 8, 0];
var aux = [];
var lo = 0;
var hi = arr.length - 1;
//const ms = new Merge<number>;
Merge.sort(arr, aux, lo, hi);
console.log(arr);
