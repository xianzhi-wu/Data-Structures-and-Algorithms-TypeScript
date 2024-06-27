"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
exports.default = swap;
