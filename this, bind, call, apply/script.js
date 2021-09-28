// function hello() {
//     console.log('Hello!', this);
// }

// const person = {
//     name: 'Iaroslav',
//     age: 29,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(document),
//     logInfo: function(job, tel) {
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//         console.log(`Job is ${job}`)
//         console.log(`Tel num is: ${tel}`)
//         console.groupEnd()
//     }
// }

// const girl = {
//     name: 'Kris',
//     age: 24,
// };

// person.logInfo.bind(girl, 'manik', '063-410-68-21')();
// person.logInfo.call(girl, 'manik', '063-410-68-21');
// person.logInfo.apply(girl, ['manik', '063-410-68-21']);

// const array = [1, 2, 3, 4, 5];

// function multiply(arr, n) {
//     return arr.map(function(i) {
//         return i * n
//     })
// }

// Array.prototype.multiply = function(n) {
//     return this.map(function(i) {
//         return i * n;
//     });
// };

// console.log(array.multiply(2));

//This
// 1. Default binding (дефолтная привязка)
var a = 2;

function fn() {
    console.log(this.a); //this = window
}

fn();

// 2. Implicit binding (непрямая привязка)

var obj = {
    a: 2,
    fn: function() {
        console.log(this.a);
    },
};

obj.fn();

// 3. Explicit binding (прямая привязка)

var foo = {
    a: 2,
};

function func(p1, p2, p3) {
    console.log(this.a, p1, p2, p3);
}

let result = func.bind(foo, 'hello', 123); //нужно вызывать, для этого присваиваем в переменную

result();

func.call(foo, 'hello', 123); //сама вызывается

func.apply(foo, ['bob', 'lora', 33]);

//Потеря контекста
var user = {
    name: 'Iaroslav',
    sayHi() {
        console.log(`Привет, ${this.name}`);
    },
};

setTimeout(user.sayHi.bind(user), 1000);

// 4. Function constructor

function Example(a, b) {
    this.a = a;
    this.b = b;
}

const example = new Example(2, 'hello'); //return this
console.log(example);