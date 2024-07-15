"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Merge_1 = require("./Merge");
// Bottom-up mergesort
var MergeBU = /** @class */ (function () {
    function MergeBU() {
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
            for (var lo = 0; lo < N - sz; lo += sz + sz) {
                // Calculate mid (middle) and hi (high) indices for merging
                var mid = lo + sz - 1;
                var hi = Math.min(lo + sz + sz - 1, N - 1);
                (0, Merge_1.merge)(arr, aux, lo, mid, hi); // Merge the subarrays
            }
        }
    };
    return MergeBU;
}());
var arr = [2, 1, 3, 6, 5, 7, 9, 8, 0, 4];
MergeBU.sort(arr);
console.log(arr);
