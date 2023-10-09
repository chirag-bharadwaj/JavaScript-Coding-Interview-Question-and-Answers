function bubbleSort(arr) {
    const n = arr.length
    let swapped;

    do {
        swapped = false
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
    return arr
}

console.log(bubbleSort([65, 1, 46, 92, 31]));