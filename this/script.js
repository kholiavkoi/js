function hello() {
    console.log('Hello!', this);
}

const person = {
    name: 'Iaroslav',
    age: 29,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, tel) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`)
        console.log(`Tel num is: ${tel}`)
        console.groupEnd()
    }
}

const girl = {
    name: 'Kris',
    age: 24
}

person.logInfo.bind(girl, 'manik', '063-410-68-21')()
person.logInfo.call(girl, 'manik', '063-410-68-21')
person.logInfo.apply(girl, ['manik', '063-410-68-21'])

const array = [1, 2, 3, 4, 5]

// function multiply(arr, n) {
//     return arr.map(function(i) {
//         return i * n
//     })
// }

Array.prototype.multiply = function(n) {
    return this.map(function(i) {
        return i * n
    })
}


console.log(array.multiply(2));