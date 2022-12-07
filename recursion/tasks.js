// 1. Calculate factorial
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5) = 120

let factorial = (number) => {
    if ( number === 1) return number
    return number * factorial(number - 1)
}

console.log(factorial(5))

// 2. Compute the sum of an array of integers.
// sum([1, 2, 3, 4, 5, 6]) = 21

let sum = (arr) => {
    if (arr.length === 1) {
        return arr[0]
    } else {
        return arr[0] + sum(arr.splice(1))
    }
}

console.log(sum([1, 2, 3, 4, 5, 6]));

// 3. Compute the exponent of a number
// 8^2 = 8 x 8 = 64

let exponent = (base, exp) => {
    if (exp === 0 ) return 1
    return base * exponent(base, exp - 1)
}

console.log(exponent(9, 2))


// 4. Write a function that reverses a string.

let reverse = (str) => {
    if (str.length === 0) return str
    return reverse(str.substring(1, str.length)) + str[0]
}

console.log(reverse('hakaton'))

// 5. Build List
// buildList(0, 5) = [0, 0, 0, 0, 0]
// buildList(7, 3) = [7, 7, 7]

let buildList = (value, length) => {
    if (length === 1) return value
    return [value].concat(buildList(value, length - 1))
}

console.log(buildList(7, 3))