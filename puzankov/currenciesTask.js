const input = [
    ['usd', 'buy', 10000],
    ['usd', 'sell', 5000],
    ['gpb', 'buy', 9000],
    ['eur', 'sell', 7000],
    ['uah', 'buy', 10000],
    ['usd', 'sell', 25000],

]

// const output = {
//     usd: [10000, 30000],
//     gpb: [9000, 0],
//     eur: [0, 7000],
//     uah: [10000, 0]
// }


let result = {}

input.forEach((item) => {
    let [currency, type, amount] = item
    if (!result[currency]) {
        result[currency] = [0, 0]
    }

    result[currency][type === 'buy' ? 0 : 1] += amount
})


console.log(result)