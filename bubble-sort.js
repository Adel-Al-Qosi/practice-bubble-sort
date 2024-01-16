function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap values if they are in the wrong order
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        // Set swapped to true to indicate a swap occurred
        swapped = true;
        console.log(arr.join(","));
      }
    }

    // Log the array after each pass
    
  } while (swapped);
  console.log(arr.join(","));
  // If no swaps occurred, the array is already sorted, and we can return
  return arr
}

module.exports = bubbleSort;