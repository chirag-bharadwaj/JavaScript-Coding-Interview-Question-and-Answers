// Armstrong number = 153 = 1^3 + 5^3 + 3^3 = 153
// Each digit is rised to the total number of digits

function isArmstrongNumber(number) {
    const numString = number.toString()
    const numDigits = numString.length
    let sum = 0

    for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(numString[i])
        sum += Math.pow(digit, numDigits)
    }
    return sum === number
}

console.log(isArmstrongNumber(153));