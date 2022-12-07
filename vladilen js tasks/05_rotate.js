// function isStringRotated(source, test) {
//     const firstChar = source[0]
//     let index = test.indexOf(firstChar)
//
//     let splitted = test.split(test[index])
//
//     return `${test[index]}${splitted[1]}${splitted[0]}` === source
// }

// function isStringRotated(source, test) {
//     if (source.length !== test.length) return false
//
//     for (let i = 0; i < source.length; i++) {
//         let rotate = source.slice(i, source.length) + source.slice(0, i)
//
//         if (rotate === test) return true
//     }
//
//     return false
// }

function isStringRotated(source, test) {
    return (source + source).includes(test) && source.length === test.length
}


console.log(isStringRotated('javascript', 'scriptjava')) // true
console.log(isStringRotated('javascript', 'iptjavascr')) // true
console.log(isStringRotated('javascript', 'java')) // false