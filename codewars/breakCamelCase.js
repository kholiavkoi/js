function breakCamelCase(str) {
    // let res = ''
    // for (let i = 0; i < str.length; i++) {
    //     const current = str[i]
    //     if (current === current.toUpperCase()){
    //         res += ` ${current}`
    //     } else {
    //         res += current
    //     }
    // }
    //
    // return res

    return str.replace(/([A-Z])/g, ' $1')
}

console.log(breakCamelCase('camelCasing')) // 'camel Casing'
console.log(breakCamelCase('camelCasingTest')) // 'camel Casing Test'
