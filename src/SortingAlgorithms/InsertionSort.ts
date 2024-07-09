class Insertion {
  // The sort method is a generic method that sorts an array of any type T
  public sort<T>(arr: T[]): void {
    // Store the length of the array in a variable n
    const n: number = arr.length;
    // Iterate over the array starting from the first element to the last
    for (let i = 0; i < n; i++) {
      // Store the current element in curVal
      let curVal = arr[i];
      // 'var' is used for 'j' so it is not block scoped and can be accessed outside the for loop
      // Iterate backward from the position before the current position to the beginning of the array
      for (var j = i - 1; j >= 0; j--) {
        // If the current value is less than the value at position j, shift the value at j to the right
        if (curVal < arr[j]) {
          arr[j + 1] = arr[j];
        } else {
          // Otherwise, break out of the loop
          break;
        }
      }
      //Variable j is not blocked scoped, so it can be accessed outside the for loop
      // Insert the current value into its correct position in the sorted portion of the array
      arr[j + 1] = curVal;
    }
  }
}

// // Create an instance of the Insertion class
// const insertion = new Insertion();

// // Define an array of numbers to be sorted
// const arr = [3, 5, 2, 6, 1, 0, 7, 4, 0, 2];

// // Call the sort method to sort the array
// insertion.sort(arr);

// // Log the sorted array to the console
// console.log(arr); // Output: [0, 0, 1, 2, 2, 3, 4, 5, 6, 7]