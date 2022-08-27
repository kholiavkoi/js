const vowels = ['a', 'e', 'i', 'o', 'u']


// one line solve
// const findVowels = (str) => {
//     return [...str].filter(item => vowels.includes(item)).length
// }


// solution with RegExp
function findVowels(str) {
    const matched = str.match(/[aeiou]/gi)
    return matched ? matched.length : 0
}

// const findVowels = (str) => {
//     let count = 0
//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             count += 1
//         }
//     }
//
//     return count
// }


console.log(findVowels('hello')) // 2
console.log(findVowels('why')) // 0