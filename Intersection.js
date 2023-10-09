function findIntersection(arr1, arr2) {
    const intersection = []

    for (const ele of arr1) {
        if (arr2.includes(ele)) {
            intersection.push(ele)
        }
    }
    return intersection
}

console.log(findIntersection([1, 2, 3], [12, 1, 3, 5]));