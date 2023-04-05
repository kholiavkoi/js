function flatten(any, result = []) {
    // const flat = []
    //
    // any.forEach(item => {
    //     if (Array.isArray(item)) {
    //         flat.push(...flatten(item))
    //     } else {
    //         flat.push(item)
    //     }
    // })
    //
    //
    // return flat

    for (let i = 0; i < any.length; i++) {
        if (Array.isArray(any[i])) {
            result.push(...flatten(any[i]))
        } else {
            result.push(any[i])
        }
    }

    return result
}


console.log(flatten([1, [2, 3], 4, 5, [6, [7]]]))  // [1, 2, 3, 4, 5, 6, 7]