function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--; // Optimized: Reduce the range after each pass
    } while (swapped);

    return arr;
}

// Example usage
let numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(numbers));
