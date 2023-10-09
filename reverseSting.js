// let str = 'chirag'

// let strReverse = str.split('').reverse().join('')

// console.log(strReverse);

function reversed(str) {
    let reverseStr = ''

    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i]
    }
    return reverseStr
}

console.log(reversed('23'));