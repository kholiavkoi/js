const arr = [2, 4, 3, 2, 4, 3, 3, 1, 2, 1]

// first method
console.log([...new Set(arr)])
console.log(Array.from(new Set(arr)))

// second method
console.log(arr.filter((item, index) => {
    return index === arr.indexOf(item)
}))


// third method

console.log(arr.reduce((uniq, item) => {
    return uniq.includes(item) ? uniq : [...uniq, item]
}, []))