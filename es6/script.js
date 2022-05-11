if (true) {
    var  a = 444;
}

console.log(a); //works


// if (true) {
//     let  b = 555;
// }

// console.log(b); //doesn`t work


//Hoisting
c = 20;
console.log(c);   //20
var c = 10;


// e = 20;
// console.log(e);   //error
// let e = 10;

// const COLOR = '#fff';
// COLOR = '#000';

// console.log(COLOR);   //ERROR


const arr = [1, 3, 5, 7, 9]
console.log(arr);
arr.push(12)
console.log(arr);

const obj = {
    a: 2
}

obj.name = 'Yarik'

console.log(obj);