let s1 = '()' // true
let s2 = "()[]{}" // true
let s3 = "(]" // false
let s4 = "([)]" // false
let s5 = "{[]}" // true
let s6 = '{[[]{}]}()()' // true


function isValid(s) {
    let stack = []
    let brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let i = 0; i < s.length; i++) {
        const current = s[i]

        if (isClosedBracket(current)) {
            if (brackets[current] !== stack.pop()) {
                return false
            }
        } else {
            stack.push(current)
        }
    }

    return stack.length === 0
}

function isClosedBracket (ch) {
    return [')', '}', ']'].indexOf(ch) > -1
}

console.log(isValid(s1))
console.log(isValid(s2))
console.log(isValid(s3))
console.log(isValid(s4))
console.log(isValid(s5))
console.log(isValid(s6))