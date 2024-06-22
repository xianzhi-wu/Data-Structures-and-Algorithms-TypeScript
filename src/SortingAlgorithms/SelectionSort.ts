import swap from './swap'; 

class Selection {
  // The sort method is a generic method that sorts an array of any type T
  public sort<T>(arr: T[]): void {
    // Store the length of the array in a variable n
    const n: number = arr.length;

    // Iterate over the array from the first element to the second to last element
    for(let i: number = 0; i < n - 1; i++) {
      // Assume the minimum element is the current element
      let min = i;
      // Iterate over the array starting from the element after the current element to the last element
      for (let j = i + 1; j < n; j++) {
        // If the element at j is less than the element at min, update min to j
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      // If the minimum element is not the current element, swap the current element with the minimum element
      if (min !== i) {
        swap(arr, i, min);
      }
    }
  }
}

// Create an instance of the Selection class
const selection = new Selection();

// Define an array of numbers to be sorted
const arr = [3, 5, 2, 6, 1, 0, 7, 4];

// Call the sort method to sort the array
selection.sort(arr);

// Log the sorted array to the console
console.log(arr); // Output: [0, 1, 2, 3, 4, 5, 6, 7]