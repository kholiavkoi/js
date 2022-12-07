function toWeirdCase(str) {
    return str.split(' ').map(words => words.split('').map(mapToWeird).join('')).join(' ')
}

function mapToWeird(l, i) {
    return i % 2 !== 0 ? l.toLowerCase() : l.toUpperCase()
}


console.log(toWeirdCase('test')) // 'TeSt'
console.log(toWeirdCase('this is a test')) // 'ThIs Is A TeSt'