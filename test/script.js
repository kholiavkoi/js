function isItANum(str) {
    const replaced = str.replace(/\D/g, '')
    if (replaced.length === 11 && replaced[0] === '0') {
        return replaced
    } else {
        return 'Not a phone number'
    }
}


console.log(isItANum("S:)0207ERGQREG88349F82!efRF)")) // '02078834982'
console.log(isItANum("sjfniebienvr12312312312ehfWh")) // 'Not a phone number'
