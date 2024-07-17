class Merge {
    public static sort<T>(arr: T[], aux: T[], lo: number, hi: number): void {
        // Base case
        if (hi <= lo) {
            return;
        }

        // Divide array into two halves and recursively sort each half
        const mid: number = lo + Math.floor((hi - lo) / 2);
        this.sort(arr, aux, lo, mid);
        this.sort(arr, aux, mid + 1, hi);

        // Merge two halves.
        Merge.merge(arr, aux, lo, mid, hi);
    }

    public static merge<T>(arr: T[], aux: T[], lo: number, mid: number, hi: number): void {
        // Copy elements to the auxiliary array
        for (let k: number = lo; k <= hi; k++) {
            aux[k] = arr[k];
        }

        let i: number = lo, j: number = mid + 1;
        for(let k: number = lo; k <= hi; k++) {
            if (i > mid) {
                // If the left half is exhausted
                arr[k] = aux[j++];
            } else if (j > hi) {
                // If the right half is exhausted
                arr[k] = aux[i++];
            } else if (aux[j] < aux[i]) {
                // If current element in the right half is less than current element in the left half
                arr[k] = aux[j++];
            } else {
                // If current element in the left half is less than or equal to current element in the right half
                arr[k] = aux[i++];
            }
        }
    }
}

class MergeBU extends Merge {
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
                this.merge(arr, aux, lo, mid, hi); // Merge the subarrays
            }
        }
    }
}

// Export the merge function
export const merge = Merge.merge;

let arr: number[] = [2, 1, 3, 6, 5, 7, 9, 8, 0];
let aux: number[] = [];

const lo = 0;
const hi = arr.length - 1;
//const ms = new Merge<number>;
Merge.sort(arr, aux, lo, hi);
console.log(arr);

arr = [2, 1, 3, 6, 5, 7, 9, 8, 0, 10];
MergeBU.sort(arr);
console.log(arr);
