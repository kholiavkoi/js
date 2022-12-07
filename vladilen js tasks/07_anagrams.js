function allAnagrams(arr) {
    let newArr = arr.map(item => {
        return item.split('').sort().join('')
    })

    for (let i = 1; i < newArr.length; i++) {
        if (newArr[0] !== newArr[i]) return false
    }

    return true
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
console.log(allAnagrams(['abcd', 'bdxc', 'cabd'])) // false