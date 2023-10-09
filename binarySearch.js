//Works only when given sorted array

function binarySearch(arr, target) {

    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}

// const result = binarySearch([1, 2, 3, 4, 5, 24], 2)

// if (result !== -1) {
//     console.log("found", result);
// } else {
//     console.log("not found");
// }

console.log(binarySearch([1, 2, 3, 4, 5], 2));