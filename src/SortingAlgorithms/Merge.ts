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

// Export the merge function
export const merge = Merge.merge;

let arr: number[] = [2, 1, 3, 6, 5, 7, 9, 8, 0];
let aux: number[] = [];

const lo = 0;
const hi = arr.length - 1;
//const ms = new Merge<number>;
Merge.sort(arr, aux, lo, hi);

console.log(arr);
