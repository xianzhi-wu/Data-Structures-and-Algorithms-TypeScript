import swap from '../utils/swap'; 

class Heap<T> {
  public sort(arr: (T | null)[]): void {
    // Get the last index
    let N = arr.length - 1;

    // Construct a maxheap using the method 'sink'
    for(let i = Math.floor((N-1)/2); i >= 0; i--) {
      this.sink(arr, i, N)
    }

    // heap sort
    // Move the maximum to the end (of the unsorted element)
    // Repeat until the sorted array is constructed
    while(N > 0) {
      swap(arr, 0, N--);
      this.sink(arr, 0, N);
    }
  }

  // The heap order is violated when parent's key becomes smaller than one (or both) of its children's.
  // To eliminate the violation, exchange the key in parent with key in larger child.
  // Repeat this process until heap order is restored
  public sink(arr: (T | null)[], k: number, N: number): void {
    while (2*k + 1 <= N) {
      // Index of the left child
      let j = 2*k + 1;

      if (j < N && arr[j]! < arr[j+1]!) {
        j++;
      }

      if (arr[k]! > arr[j]!) {
        break;
      }
      
      swap(arr, k, j);
      k = j;
    }
  }
}

const heap = new Heap<number>();
const arr = [5, 3, 2, 7, 1, 6, 8, 9, 0, 4];
heap.sort(arr);
console.log(arr);