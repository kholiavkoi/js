const arr = [2, 7, 11, 15]

// const sumOfTwo = (arr, target) => {
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 result.push(i)
//                 result.push(j)
//             }
//         }
//     }
//
//     return result
// }

const sumOfTwo = (arr, target) => {
    const numObject = {}

    for (let i = 0; i < arr.length; i++) {
        numObject[arr[i]] = i
    }

    for (let i = 0; i < arr.length; i++) {
        const diff = target - arr[i]

        if (numObject[diff] && numObject[diff] !== i ) {
            return [i, numObject[diff]]
        }
    }
    return []
}

console.log(sumOfTwo(arr, 14))