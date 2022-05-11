// Let
let a = 'Variable a'
let b = 'Variable b'

{
    a = 'New Variable A'
    let b = 'Local Variable B'
    console.log('Scope A', a)
    console.log('Scope B', b)
}
console.log('Global A', a)
console.log('Global B', b)


// Const
const PORT = 8080;
// PORT = 2000 error - constant doesnt change

const array = ['Javascript', 'is', 'awesome']
array.push('!')
array[0] = 'JS'
console.log(array) // ['JS', 'is', 'awesome', '!']

const obj = {}
obj.name = 'Iaroslav'
obj.age = 29

console.log(obj) // 29

obj.age = 21
console.log(obj) // 21