function isPrime(num) {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
}

console.log(isPrime(11))


// function getPrimes(num) {
//     const primes = []
//     for (let i = 2; i < num; i++) {
//         if (isPrime(i)) {
//             primes.push(i)
//         }
//     }
//
//     return primes
// }


// Решето Эрастосфена
function getPrimes(num) {
    const seive = []
    const primes = []

    for (let i = 2; i <= num; i++) {
        if (!seive[i]) {
            primes.push(i)
            for (let j = i * i; j <= num; j += i) {
                seive[j] = true
            }
        }
    }
    return primes
}

console.log(getPrimes(120))