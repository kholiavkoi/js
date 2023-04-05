function twoDifference(arr) {
    // const res = []
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         const num1 = arr[i]
    //         const num2 = arr[j]
    //         if (Math.abs(num1 - num2) === 2) {
    //             res.push([Math.min(num1, num2), Math.max(num1, num2)])
    //         }
    //     }
    // }
    //
    // return res.sort((a, b) => a[0] - b[0])

    return arr
        .sort((a, b) => a - b)
        .filter(a => arr.indexOf(a + 2) !== -1)
        .map(a => [a, a + 2])
}

console.log(twoDifference([1, 2, 3, 4])) // [[1, 3], [2, 4]]
console.log(twoDifference([4, 1, 2, 3])) // [[1, 3], [2, 4]]
console.log(twoDifference([4, 3, 1, 5, 6])) // [[1, 3], [3, 5], [4, 6]