function highAndLow(str){
    // let sorted = str.split(' ').sort((a, b) => a - b)
    // return `${sorted[sorted.length - 1]} ${sorted[0]}`
    const arr = str.split(' ').map(Number)

    return `${Math.max(...arr)} ${Math.min(...arr)}`
}

console.log(highAndLow('4 5 29 -2 83 -19 32 4'))  // '83 -19'