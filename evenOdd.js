let arr = [1, 2, 3, 4, 5]

let sum = 0
arr.map((ele) => {
    return sum += ele
})

console.log(sum);