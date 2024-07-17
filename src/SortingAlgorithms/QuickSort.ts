import swap from "../utils/swap"; 

class Quick {
    private static partition<T>(arr: T[], lo: number, hi: number): number {
        let i: number = lo, j: number = hi + 1;

        while(true) {
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

            if (i >= j) break;
            swap(arr, i, j);
        }

        swap(arr, lo, j);
        return j;
    }

    private static _sort<T>(arr: T[], lo: number, hi: number): void {
        if (hi <= lo) return;

        const j = this.partition(arr, lo, hi);
        this._sort(arr, lo, j - 1);
        this._sort(arr, j + 1, hi);
    }

    public static sort<T>(arr: T[]): void {
        this._sort(arr, 0, arr.length - 1);
    }
}


let arr: number[] = [2, 1, 3, 6, 5, 7, 9, 8, 0, 4];
Quick.sort(arr);
console.log(arr);