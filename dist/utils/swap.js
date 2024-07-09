"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = swap;
function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
