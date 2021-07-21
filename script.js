
// Imperative
// var foo = [11, 2, 4, 22, 80, 5];

// function sum() {
//     var i,
//         size = foo.length,
//         result = 0;
        
//     for (i = 0; i < size; i += 1){
//         result += foo[i];
//     }

//     return result;
// }

// console.log(sum())


// Declarative

// function sum() {
// return foo.reduce(function(acc, number){
//         return acc + number
//     }, 0)
// }

// console.log(sum());

// var str = 'rotor';

// function palindrome() {
//     return str.split('').reverse().join('') === str;
// }
// console.log(palindrome());

// var user = {
//     name: 'Bob',
//     surname: 'Bobson',
//     age: 30,
// }
//     clone = {},
//     prop;

// for (var prop in user) {
//     if(user.hasOwnProperty(prop)) {
//         clone[prop] = user[prop];
//     }
// }

// console.log(user, clone)

// var clone = Object.assign({}, user)
// console.log(user, clone)
