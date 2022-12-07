// Recursive method
// const factorial = (n) => {
//     if (n === 1) {
//         return 1
//     } else {
//         return n * factorial(n - 1)
//     }
// }
//
// const answer = factorial(5)
//
// console.log(answer);


// Iterative method
// const iterFactorial = (n) => {
//     const iter = (counter, acc) => {
//         if (counter === 1) {
//             return acc;
//         }
//         return iter(counter - 1, counter * acc);
//     }
//     return iter(n, 1)
// }
//
// const iterAnswer = iterFactorial(5)
// console.log(iterAnswer);


// const countToTen = (num = 1) => {
//     while (num <= 10) {
//         console.log(num)
//         num++
//     }
// }
//
// console.log(countToTen(5))


// const recursionCount = (num = 1) => {
//     if (num > 10) return
//     console.log(num)
//     recursionCount(num + 1)
// }
//
// console.log(recursionCount())

// Fibonacci
// 0, 1, 1, 2, 3, 5, 8, 13, 21 etc.

const fibonacci = (num, array = [0, 1]) => {
    while (num > 2) {
        const [nextToLast, last] = array.slice(-2)
        array.push(nextToLast + last)
        num -= 1
    }

    return array
}

console.log(fibonacci(10))

const recursionFib = (num, array = [0, 1]) => {
    if (num <= 2) return array
    const [nextToLast, last] = array.slice(-2)
    return recursionFib(num - 1, [...array, nextToLast + last])
}

console.log(recursionFib(12))


// !!! wtf??

const fibPos = (pos) => {
    if (pos < 2) return pos
    return fibPos(pos - 1) + fibPos(pos - 2)
}

console.log(fibPos(8))