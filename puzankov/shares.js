let prices1 = [7, 1, 5, 3, 6, 4]
let prices2 = [7, 6, 5, 4, 3, 1]

let maxProfit = function (prices) {
    let result = 0
    // prices.reduce((sum, current, index, arr) => current > arr[index - 1] ? result += current - arr[index - 1] : result)

    prices.reduce((sum, current, index, arr) => {
        if (current > arr[index - 1]) {
            result += current - arr[index - 1]
        }
    })
    return result
}

console.log(maxProfit(prices1))

