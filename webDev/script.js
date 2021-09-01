// document.querySelector('button').addEventListener('click', myClick)


// function myClick() {
//     var div = document.querySelector('.out');
//     var input = document.querySelector('input').value;
//     div.innerHTML = input;
// }


// function a1() {
//     a2();
// }

// function a2() {
//     a3();
// }

// function a3() {
//     console.trace();
// }

// a1()

// var a = {
//     a1: 1,
//     a2: 2,
//     3: 'hello'
// }

// console.table(a)


//REDUCE
// let a = [1, 2, 3, 4, 5];

// let sum = 0;
// let i;

// for (i = 0; i < a.length; i = i + 1) {
//     sum = sum + a[i];
// }
// console.log(sum);

// var b = a.reduce(function(prev, current, index) {
//     return prev + current;
// });
// console.log(b);

// let c = [21, 231, 33, 1431, 55, 1332];
// let max = c[0];
// let index = 0;

// for (let i = 0; i < c.length; i = i + 1) {
//     if (c[i] > max) {
//         max = c[i];
//         index = i;
//     }
// }
// console.log(index, max);

// let foo = c.reduce((prev, item, index) => {
//     if (item > prev[1]) {
//         return [index, item];
//     } else {
//         return prev;
//     }
// }, [0, c[0]])
// console.log(foo);

// const data = [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ]
// const flat = data.reduce((prev, item) => {
//     return prev.concat(item)
// }, [])

// console.log(flat);


// let flat = []
// for (let i = 0; i < data.length; i = i + 1) {
//     flat = flat.concat(data[i])
// }
// console.log(flat);

// let a = 10;

// function typeText(b) {
//     return 100 * b;
// }

// document.querySelector('.new-btn').addEventListener('click', () => {
//     console.log(typeText(70));
//     document.querySelector('.new-div').innerHTML = typeText(20)
// })


// const person = {
//     name: 'Iaroslav',
//     age: 29,
//     showInfo: function(job, phone) {
//         console.group(`${this.name} info:`)
//         console.log(`Name: ${this.name}`);
//         console.log(`Age: ${this.age}`);
//         console.log(`Job is ${job}`);
//         console.log(`Phone is ${phone}`);
//         console.groupEnd();
//     }
// }

// person.showInfo()


// const girl = {
//     name: 'Christina',
//     age: 24,
// }

// person.showInfo.bind(girl, 'manik', '093-457-10-06')()
// person.showInfo.call(girl, 'manik', '093-457-10-06')
// person.showInfo.apply(girl, ['manik', '093-457-10-06'])

const array = [1, 2, 3, 4, 5];

// function multiply(arr, n) {
//     return arr.map(function (i) {
//         return i * n;
//     })
// }

Array.prototype.multiply = function (n) {
    return this.map(function (i) {
        return i * n;
    });
};

console.log(array.multiply(2));