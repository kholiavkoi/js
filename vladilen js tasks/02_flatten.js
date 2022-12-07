function flatten(arr) {
    return arr.flat(Infinity)
}


// recursion

function flattenRecursion(arr) {
    const res = []

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            const flat = flattenRecursion(arr[i])
            for (let j = 0; j < flat.length; j++) {
                res.push(flat[j])
            }
        } else {
            res.push(arr[i])
        }
    }

    return res
}

console.log(flatten([[1], [[2, 3]], [[[4]]]]));
console.log(flattenRecursion([[1], [[2, 3]], [[[4]]]]));