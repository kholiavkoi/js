function numberOfCarries(a, b) {
    const lenA = `${a}`.length
    const lenB = `${b}`.length

    let len = lenA > lenB ? lenA : lenB

    let i = 0;
    let carried = 0;
    let totalCarried = 0;

    while (i < len) {
        const digitA = a % 10
        const digitB = b % 10

        if (digitA + digitB + carried > 9) {
            carried = 1
            totalCarried++
        } else {
            carried = 0
        }

        a = Math.floor(a / 10)
        b = Math.floor(b / 10)

        i++
    }

    return totalCarried
}


console.log(numberOfCarries(543, 3456)) // 0
console.log(numberOfCarries(1927, 6426)) // 2
console.log(numberOfCarries(9999, 1)) // 4