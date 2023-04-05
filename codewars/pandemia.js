function pandemia(str) {
    if (!str.includes('0') && !str.includes('1')) return 0

    let count = 0
    let total = 0
    const arr = str.split('X')

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('1')) {
            count += arr[i].length
        }
        total += arr[i].length
    }

    return (count / total) * 100
}


console.log(pandemia('01000000X000X011X0X'))  // 73.333333...
console.log(pandemia('XXXX'))  // 0
console.log(pandemia('11111')) // 100
console.log(pandemia('X00X000000X10X0100')) // 42,85714...