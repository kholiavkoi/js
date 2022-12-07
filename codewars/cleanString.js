function cleanString(str) {
    let res = ''
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (char === '#') {
            res += str.substring(i - 1, i + 1)
        }
    }

    return res
}


console.log(cleanString('abc#d##c'))  // 'ac'
console.log(cleanString('abc####d##c#'))  // ''