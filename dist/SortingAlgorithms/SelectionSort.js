"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var swap_1 = require("../utils/swap");
var Selection = /** @class */ (function () {
    function Selection() {
    }
    // The sort method is a generic method that sorts an array of any type T
    Selection.prototype.sort = function (arr) {
        // Store the length of the array in a variable n
        var n = arr.length;
        // Iterate over the array from the first element to the second to last element
        for (var i = 0; i < n - 1; i++) {
            // Assume the minimum element is the current element
            var min = i;
            // Iterate over the array starting from the element after the current element to the last element
            for (var j = i + 1; j < n; j++) {
                // If the element at j is less than the element at min, update min to j
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            // If the minimum element is not the current element, swap the current element with the minimum element
            if (min !== i) {
                (0, swap_1.default)(arr, i, min);
            }
        }
    };
    return Selection;
}());
// Create an instance of the Selection class
var selection = new Selection();
// Define an array of numbers to be sorted
var arr = [3, 5, 2, 6, 1, 0, 7, 4];
// Call the sort method to sort the array
selection.sort(arr);
// Log the sorted array to the console
console.log(arr); // Output: [0, 1, 2, 3, 4, 5, 6, 7]
