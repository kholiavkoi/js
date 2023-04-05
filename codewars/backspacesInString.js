function backspacesInString(str) {
    let res = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '#') {
            res.push(str[i])
        } else {
            res.pop()
        }
    }

    return res.join('')

}

console.log(backspacesInString('abc#d##c'))  // 'ac'
console.log(backspacesInString('abc####d##c#'))  // ''