// function fibonacci(n) {
//     const arr = [1, 1]
//     if (n < 2) {
//         return arr.slice(0, n)
//     }
//     while (arr.length < n) {
//         const last = arr[arr.length - 1]
//         const prev = arr[arr.length - 2]
//         arr.push(last + prev)
//         fibonacci(n - 1)
//     }
//     return arr
// }

// cash (memoization)

const fibonacci = (function () {
    const seq = [1, 1]

    return function (n) {
        console.log('Called with ', n)
        if (seq.length >= n) {
            console.log('No compute')
            return seq.slice(0, n)
        }

        while (seq.length < n) {
            const last = seq[seq.length - 1]
            const prev = seq[seq.length - 2]
            seq.push(last + prev)
            fibonacci(n - 1)
            console.log('Pushed ', seq[seq.length - 1])
        }

        return seq
    }
})()


console.log(fibonacci(10)) // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log(fibonacci(8))
console.log(fibonacci(12))