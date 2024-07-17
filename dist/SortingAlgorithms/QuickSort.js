"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var swap_1 = require("../utils/swap");
var Quick = /** @class */ (function () {
    function Quick() {
    }
    Quick.partition = function (arr, lo, hi) {
        var i = lo, j = hi + 1;
        while (true) {
            while (arr[++i] < arr[lo]) {
                if (i === hi) {
                    break;
                }
            }
            while (arr[lo] < arr[--j]) {
                if (j === lo) {
                    break;
                }
            }
            if (i >= j)
                break;
            (0, swap_1.default)(arr, i, j);
        }
        (0, swap_1.default)(arr, lo, j);
        return j;
    };
    Quick._sort = function (arr, lo, hi) {
        if (hi <= lo)
            return;
        var j = this.partition(arr, lo, hi);
        this._sort(arr, lo, j - 1);
        this._sort(arr, j + 1, hi);
    };
    Quick.sort = function (arr) {
        this._sort(arr, 0, arr.length - 1);
    };
    return Quick;
}());
var arr = [2, 1, 3, 6, 5, 7, 9, 8, 0, 4];
Quick.sort(arr);
console.log(arr);
