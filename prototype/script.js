const person = new Object({
    name: 'Iaroslav',
    age: 29,
    greet: function() {
        console.log('Greet!');
    }
})

Object.prototype.sayHello = function() {
    console.log('Hello!');
}

const girl = Object.create(person)

girl.sayHello()


const str = new String('I`m String')