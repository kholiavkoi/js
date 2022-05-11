let a = 42;
let b = a;
b++
console.log('a', a) // 42
console.log('b', b) // 43

let c = [1, 2, 3]
let d = c
// use Array.concat to make copy like let d = c.concat()
d.push(4)
let e = [1, 2, 3, 4]
console.log('c', c) // [1, 2, 3, 4]
console.log('d', d) // [1, 2, 3, 4]

console.log(c === d) // true - its reference
console.log(c === e) // false - different objects