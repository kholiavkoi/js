function seriesSum(num) {
    let res = 0
    for (let i = 0; i < num; i++) {
        res += 1 / (i * 3 + 1)
    }

    return res.toFixed(2)
}

console.log(seriesSum(1))  // '1.00'
console.log(seriesSum(2))  // '1.25'
console.log(seriesSum(3))  // '1.39'
console.log(seriesSum(4))  // '1.49'
