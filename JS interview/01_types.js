// 8 types
// null, undefined, boolean, number, string, object, symbol, bigInt
// undefined - when variable was not defined or initialised or no data
// null - there is no data, mostly made by human


console.log(typeof 0)
console.log(typeof true)
console.log(typeof 'Javascript') //'', "", ``
console.log(typeof undefined)
console.log(typeof  Math)
console.log(typeof Symbol('JS'))
console.log(typeof null) // obj - mistake in js
console.log(typeof function() {}) // not type, but easier to work
console.log(typeof NaN) // number - also not correct

// fetch types
let language = 'Javascript'
if (language) {
    console.log('The best language is: ', language)
}


// false = '', 0, null, undefined, NaN, false
console.log(Boolean('')) // false
console.log(Boolean('Hello')) // true
console.log(Boolean(' ')) // true
console.log(Boolean('0')) // true
console.log(Boolean(0)) // false
console.log(Boolean(null)) // false
console.log(Boolean([])) // true - remember
console.log(Boolean({})) // true - remember
console.log(Boolean(function (){})) // true - remember


// Strings and numbers
console.log(1 + '2') // 12 - string
console.log('' + 1 + 0) // 10 - string
console.log('' - 1 + 0) // -1 - number
console.log('3' * '8') // 24
console.log(4 + 10 + 'px') // 14px - order is important
console.log('px' + 4 + 10) // px410 - also order is important
console.log('42' - 40) // 2
console.log('42px' - 2) // NaN
console.log(null + 2) // 2, because null = 0
console.log(undefined + 42) // NaN


// == vs ===
console.log(2 == '2') // true
console.log(2 === '2') // false
console.log(undefined == null) // true
console.log(undefined === null) // false
console.log('0' == false) // true
console.log('0' == 0) // true


// to remember!!!
console.log(false == '') // true
console.log(false == []) // true
console.log(false == {}) // false
console.log('' == 0) // true
console.log('' == []) // true
console.log('' == {}) // false
console.log(0 == []) // true
console.log(0 == {}) // false
console.log(0 == null) // false
