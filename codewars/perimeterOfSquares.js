function perimeterOfSquares(n) {
    if (n === 0) return 4
    if (n === 1) return 8
    let fib1 = 1
    let fib2 = 1
    let sum = fib1 + fib2
    let index = 2

    while (index <= n) {
        let temp = fib1
        fib1 = fib2
        fib2 = temp + fib2

        sum += fib2
        index++
    }

    return sum * 4

}


console.log(perimeterOfSquares(5)) // 80