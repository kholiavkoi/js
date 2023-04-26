// implicit binding
const person = {
	name: 'Yaroslav',
	age: 30,
	sayMyName: function () {
		console.log(`My name is ${this.name}`)
	}
}

person.sayMyName()

// explicit binding
globalThis.age = 29
function sayMyAge() {
	console.log(`My age is ${this.age}`)
}

sayMyAge.call(person)

// new binding

function Person(name) {
	// this = {}
	this.name = name
}

const p1 = new Person('Andrew')
const p2 = new Person('Batman')

console.log(p1.name, p2.name)

// default binding
// it will look for global variable or it`ll be undefined
sayMyAge()