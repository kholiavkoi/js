function reverseString(str) {
    let str2 = [...str].sort(() => -Infinity).join('')
    return str2
}

module.exports = reverseString
