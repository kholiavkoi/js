// __proto__  - es6
// Object.getPrototypeOf()  - es5


function Cat(name, color)  {
    this.name = name
    this.color = color
}

Cat.prototype.voice = function() {
    console.log(`Cat ${this.name} says meow`)
}

const cat = new Cat ('Tiwka', 'Grey')

cat.voice()
console.log(Cat.prototype)
console.log(cat)
console.log(cat.__proto__ === Cat.prototype)
console.log(cat.constructor)

// ============
function Person() {
}
Person.prototype.legs = 2
Person.prototype.skin = 'white'

const person = new Person()
person.name = 'Vladilen'

console.log('skin' in person)
console.log(person.legs)
console.log(person.hasOwnProperty('name'))

// Object.create()

const proto = {
    year: 2022
}

const myYear = Object.create(proto)

console.log(myYear.year)  // 2022
console.log(myYear.hasOwnProperty('year'))  // false, it is in prototype
console.log(myYear.__proto__ === proto)  // true