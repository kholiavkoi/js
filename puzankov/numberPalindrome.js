const input1 = 121 // true
const input2 = -121 // false
const input3 = 10 // false

const isPalindromeNumber = (num) => {
    if (num < 0) return false
    if (num % 10 === 0) return false
    if (num < 10) return true

    let rev = 0

    while (num > rev) {
        rev *= 10
        rev += num % 10
        num = Math.trunc(num / 10)
    }

    return num === rev || num === Math.trunc(rev/10)
}

console.log(isPalindromeNumber(input1))
console.log(isPalindromeNumber(input2))
console.log(isPalindromeNumber(input3))