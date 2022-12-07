function getMiddle(str) {
    let len = str.length / 2
    return len % 1 !== 0 ? str[Math.floor(len)] : str.slice(len - 1, len + 1)
}

console.log(getMiddle('test'))  // es
console.log(getMiddle('testing'))  // t
console.log(getMiddle('middle'))  // dd