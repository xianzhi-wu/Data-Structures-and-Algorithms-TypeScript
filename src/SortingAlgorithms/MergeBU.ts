import { merge } from "./Merge";

// Bottom-up mergesort
class MergeBU {
    public static sort<T>(arr: T[]) {
        const N: number = arr.length;  // Get the length of the array
        const aux: T[] = new Array(N); // Create an auxiliary array of the same length

        // Iterate over sizes of subarrays to merge (1, 2, 4, 8, ..., N)
        for (let sz: number = 1; sz < N; sz = sz + sz) {
            // Iterate over the array and merge subarrays
            // The condition lo < N - sz ensures that there are enough elements remaining
            // in the array to form a complete pair of subarrays of size sz for merging
            // If there is not a complete pair of subarrays of size sz, no need to merge
            // since the first subarray is already sorted.
            for (let lo: number = 0; lo < N - sz; lo += sz + sz) {
                // Calculate mid (middle) and hi (high) indices for merging
                const mid = lo + sz - 1;
                const hi = Math.min(lo + sz + sz - 1, N - 1);
                merge(arr, aux, lo, mid, hi); // Merge the subarrays
            }
        }
    }
}

let arr: number[] = [2, 1, 3, 6, 5, 7, 9, 8, 0, 4];
MergeBU.sort(arr);
console.log(arr);