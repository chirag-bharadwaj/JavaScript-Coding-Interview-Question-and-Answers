let arr1 = [1, 2, 3, 4, 5]
let arr2 = [10, 234, 67, 1, 2, 1, 2, 3, 4, 5]


var union = [...arr1, ...arr2]
var result = [...new Set(union)]
var result = [...new Set(arr1.concat(arr2))]

console.log(result);