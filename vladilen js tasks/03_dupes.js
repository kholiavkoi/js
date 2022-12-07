function removeDupes(str) {
    return [...new Set(str)].join('')
}

console.log(removeDupes('abcd')); // 'abcd'
console.log(removeDupes('aabbccdd')); // 'abcd'
console.log(removeDupes('abcddbca')); // 'abcd'
console.log(removeDupes('ababacddbca')); // 'abcd'
