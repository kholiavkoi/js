// One line solution

let anagram  = (str1, str2) => {
    return [...str1.toLowerCase()].sort().toString() === [...str2.toLowerCase()].sort().toString()
}


// Another solution with object

// function buildCharObject(str) {
//     const charObj = {}
//     str = str.toLowerCase().replace(/[^\w]/g)
//     for (let char of str) {
//         charObj[char] = charObj[char] + 1 || 1
//     }
//
//     return charObj
// }

// function anagram(strA, strB) {
//     const aCharObj = buildCharObject(strA)
//     const bCharObj = buildCharObject(strB)
//
//     if (Object.keys(aCharObj).length !== Object.keys(bCharObj).length) return false
//
//     for (let char in aCharObj) {
//         if (aCharObj[char] !== bCharObj[char]) {
//             return false
//         }
//     }
//
//     return true
// }


console.log(anagram('friend', 'Finder'));
console.log(anagram('hello', 'bye'));