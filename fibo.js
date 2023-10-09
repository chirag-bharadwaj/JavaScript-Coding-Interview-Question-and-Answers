function fibo(n) {
    let fiboSeries = []

    for (let i = 0; i < n; i++) {
        if (i <= 1) {
            fiboSeries.push(i)
        }
        else {
            let nextno = fiboSeries[i - 1] + fiboSeries[i - 2]
            fiboSeries.push(nextno)
        }
    }
    return fiboSeries
}

console.log(...fibo(5));