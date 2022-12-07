function highestFrequency(array) {
    let res =  array.reduce((obj, next) => {
        if (obj[next]) {
            obj[next] += 1
        } else {
            obj[next] = 1
        }

        return obj

    }, {})

    let sort = Object.entries(res).sort((a, b) => {
        return b[1] - a[1]
    })

    return sort[0][0]
}


console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e']));  // c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc']));  // abc
console.log(highestFrequency(['abc', 'def']));  // abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi']));  // ghi