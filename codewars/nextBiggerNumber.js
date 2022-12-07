function nextBigger(n){
    const max = +n.toString().split('').sort((a, b) => b - a).join('')
    let m = n + 1

    while (m <= max) {
        if (hasSameDigits(m, n)){
            return m
        }
        m++
    }

    return -1
}

function hasSameDigits(m, n) {
    return m.toString().split('').sort().join('') === n.toString().split('').sort().join('')
}

console.log(nextBigger(12))  // 21
console.log(nextBigger(513))  // 531
console.log(nextBigger(2017))  // 2071
