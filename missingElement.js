//                                                 1 way

function missing(arr) {

    let missArray = []

    let minNum = Math.min(...arr)
    let maxNum = Math.max(...arr)

    for (let i = minNum; i < maxNum; i++) {
        if (arr.indexOf(i) < 0) {
            missArray.push(i)
        }
    }
    return missArray
}

console.log(missing([1, 2, 4, 5]));