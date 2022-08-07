const input1 = 'leetcode' // 0
const input2 = 'loveleetcode' // 2
const input3 = 'aabb' // -1



const firstUniqChar = (str) => {
    let map = new Map()
    for (let i = 0; i < str.length; i++) {
        let current = str[i]
        if (map.has(current)) {
            map.set(current, map.get(current) + 1)
        } else {
            map.set(current, 1)
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (map.get(str[i]) === 1) {
            return i
        }
    }
    return -1
}


console.log(firstUniqChar(input1))
console.log(firstUniqChar(input2))
console.log(firstUniqChar(input3))