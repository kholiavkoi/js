function filterArray(arr) {
    return arr.filter((item, index) => {
        return index % 2 === 0
    })
}

module.exports = filterArray