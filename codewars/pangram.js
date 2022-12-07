function isPangram(str) {
    return new Set(str.replace(/[^a-zA-Z]/g, '').toUpperCase().split('')).size === 26
}

console.log(isPangram('The quick 2brown fox .,jumps over the lazy dog'))  // true
console.log(isPangram('This is not pangram'))  // false