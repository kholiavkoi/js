function moreZeros(s) {
    return [...new Set(s)]
        .map(c => c.charCodeAt(0))
        .map(convertToBinary)
        .filter(areMoreZeros)
        .map(convertToDecimal)
        .map(convertToChar)
}

function convertToBinary(num) {
    return num.toString(2)
}

function areMoreZeros(str) {
    const zeros = str.replace(/1/g, '').length
    const ones = str.replace(/0/g, '').length

    return zeros > ones
}

function convertToDecimal(bi) {
    return parseInt(bi, 2)
}

function convertToChar(n) {
    return String.fromCharCode(n)
}


console.log(moreZeros('abcde')) // ['a', 'b', 'd']
console.log(moreZeros('Great job!')) // ['a', ' ', 'b', '!']
console.log(moreZeros('DIGEST')) // ['D', 'I', 'E', 'T']
