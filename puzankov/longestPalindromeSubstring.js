const input1 = 'babad' // 'bab' | 'aba'
const input2 = 'cbbd' // bb
const input3 = 'mississippi' // ississi
const input4 = 'ac' // a | c
const input5 = 'aaa' // aaa

const longestPalindrome = (str) => {
    let start = 0
    let end = 0

    for (let i = 0; i < str.length; i++) {
        let len1 = expandFromCenter(str, i, i)
        let len2 = expandFromCenter(str, i, i + 1)
        let len = Math.max(len1, len2)
        if (len > end - start) {
            start = Math.ceil(i - (len - 1) / 2)
            end = Math.floor(i + (len/2))
        }
    }

    return str.substring(start, end + 1)
}

function expandFromCenter(str, L, R) {

    while (L >= 0 && R < str.length && str[L] === str[R]) {
        L--
        R++
    }
    return R - L - 1
}


console.log(longestPalindrome(input1))
console.log(longestPalindrome(input2))
console.log(longestPalindrome(input3))
console.log(longestPalindrome(input4))
console.log(longestPalindrome(input5))