function linearSearcg(arr, target) {

    for (let i in arr) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1


}
console.log(linearSearcg([20, 15, 29, 64, 3, 87, 2], 15));