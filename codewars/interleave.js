function interleave(...arrays) {
    const maxLength = Math.max(...arrays.map((arr) => arr.length))

    const res = []

    for (let i = 0; i < maxLength; i++) {
        arrays.forEach(arr => {
            if (arr[i] === undefined) {
                res.push(null)
            } else {
                res.push(arr[i])
            }

        })
    }

    return res
}


console.log(interleave([1, 2, 3], ['c', 'd', 'e']))  // [1, 'c', 2, 'd', 3, 'e']
console.log(interleave([1, 2, 3], [4, 5]))  // [1, 4, 2, 5, 3, null]