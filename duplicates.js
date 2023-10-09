let arr = [1, 2, 2, 3, 200, 200, 14, 41]


//                                               1st way
// function removeDuplicates(arrs) {
//     return [...new Set(arrs)]
// }

// console.log(removeDuplicates(arr));


//                                              2nd way
// let result = arr.filter((each, index) => {
//     return arr.indexOf(each) === index
// })

// console.log(result);
                                            // print duplicatred values
// let result = arr.filter((each, index) => {
//     return arr.indexOf(each) !== index
// })

// console.log(result);