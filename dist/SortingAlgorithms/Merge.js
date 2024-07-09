"use strict";
var Merge = /** @class */ (function () {
    function Merge() {
    }
    Merge.prototype.sort = function (arr, aux, lo, hi) {
        // Base case
        if (hi <= lo) {
            return;
        }
        // Divide array into two halves and recursively sort each half
        var mid = lo + Math.floor((hi - lo) / 2);
        this.sort(arr, aux, lo, mid);
        this.sort(arr, aux, mid + 1, hi);
        // Merge two halves.
        this.merge(arr, aux, lo, mid, hi);
    };
    Merge.prototype.merge = function (arr, aux, lo, mid, hi) {
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
var arr = [2, 1, 3, 6, 5, 7, 9, 8, 0];
var aux = [];
var lo = 0;
var hi = arr.length - 1;
var merge = new Merge;
merge.sort(arr, aux, lo, hi);
console.log(arr);
