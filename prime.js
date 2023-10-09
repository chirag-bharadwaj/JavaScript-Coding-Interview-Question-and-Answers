function isPrime(n) {
    if (n < 2) {
        return `${n} is not a Prime`
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return `${n} is not a Prime`
        }
    }
    return `${n} is a Prime number`
}

console.log(isPrime(17));