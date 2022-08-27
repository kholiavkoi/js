// let findNextPower = (val, pow) => {
//     let res = 0
//     let i = 1
//     while (res < val) {
//         res = newPow(i, pow)
//         i++
//     }
//
//     return res
// }
//
// function newPow(i, pow) {
//     let result = i
//     for (let j = 1; j < pow; j++) {
//         result = result * i
//     }
//
//     return result
// }

const findNextPower = (val, pow_) => {
    console.log(val ** (1.0 / pow_))
    return Math.ceil(val ** (1.0 / pow_)) ** pow_;
}


console.log(findNextPower(1245678, 3));