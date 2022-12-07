function twoOldestAges(arr) {
    return arr.sort((a, b) => a - b).slice(-2)
}

console.log(twoOldestAges([1, 2, 10, 8]))  // [8, 10]