console.log(sum(1, 41))

function sum(a, b) {
    return a + b
}

console.log(i) // undefined
var i = 43
console.log(i) // 43

// console.log(num) let and const hoisting doesnt work, error
let num = 44
console.log(num)



// Function Expression & Function Declaration

console.log(square(25))

function square(num) {   // function declaration
    return num ** 2
}

// const square = function (num) {    function expression doesn`t work, no hoisting
//     return num ** 2
// }